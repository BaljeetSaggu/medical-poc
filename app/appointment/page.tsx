"use client";

import { FormEvent, JSX, useMemo, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  doctor: string;
  department: string;
  message: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  doctor: "",
  department: "",
  message: "",
};

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export default function Appointment(): JSX.Element {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return Object.values(form).every((value) => value.trim().length > 0) && isValidEmail(form.email);
  }, [form]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required";
    if (!form.date.trim()) nextErrors.date = "Date is required";
    if (!form.time.trim()) nextErrors.time = "Time is required";
    if (!form.doctor.trim()) nextErrors.doctor = "Doctor is required";
    if (!form.department.trim()) nextErrors.department = "Department is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm(initialData);
    }, 1000);
  };

  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <main className="px-4 py-16">
        <div className="mx-auto w-full max-w-4xl rounded-2xl border border-app-accent/40 bg-[#f7fbff] p-6 shadow-sm md:p-10">
          <h1 className="font-display-2 text-4xl text-app-primary">Book an Appointment</h1>
          <p className="mt-3 font-body text-sm text-black/80">
            UI-only submission. This form validates required fields on the client.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block font-body text-sm font-semibold text-app-primary">Name</label>
              <Input id="name" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-body text-sm font-semibold text-app-primary">Email</label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-body text-sm font-semibold text-app-primary">Phone</label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="date" className="mb-2 block font-body text-sm font-semibold text-app-primary">Date</label>
              <Input id="date" type="date" value={form.date} onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))} />
              {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="time" className="mb-2 block font-body text-sm font-semibold text-app-primary">Time</label>
              <Input id="time" type="time" value={form.time} onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))} />
              {errors.time && <p className="mt-1 text-xs text-red-600">{errors.time}</p>}
            </div>

            <div>
              <label className="mb-2 block font-body text-sm font-semibold text-app-primary">Doctor</label>
              <Select value={form.doctor} onValueChange={(value) => setForm((prev) => ({ ...prev, doctor: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                  <SelectItem value="dr-jones">Dr. Jones</SelectItem>
                  <SelectItem value="dr-khan">Dr. Khan</SelectItem>
                </SelectContent>
              </Select>
              {errors.doctor && <p className="mt-1 text-xs text-red-600">{errors.doctor}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-body text-sm font-semibold text-app-primary">Department</label>
              <Select value={form.department} onValueChange={(value) => setForm((prev) => ({ ...prev, department: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="general-medicine">General Medicine</SelectItem>
                </SelectContent>
              </Select>
              {errors.department && <p className="mt-1 text-xs text-red-600">{errors.department}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block font-body text-sm font-semibold text-app-primary">Message</label>
              <Textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            <div className="md:col-span-2 flex items-center gap-3">
              <Button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="rounded-full bg-app-primary px-8 text-white hover:bg-app-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Submit Appointment"}
              </Button>
              {submitted && <p className="text-sm text-green-700">Appointment request submitted (UI only).</p>}
            </div>
          </form>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
