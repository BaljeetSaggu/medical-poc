"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { PhoneCall } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

type FormData = {
  name: string;
  gender: string;
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
  gender: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  doctor: "",
  department: "",
  message: "",
};

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
const isValidPhone = (value: string) => /^[0-9+\-\s()]{7,20}$/.test(value);

const selectInputClasses =
  "h-11 w-full appearance-none border-b border-[#9CB1DF] bg-transparent px-4 text-xs text-white outline-none placeholder:text-[#BCD2F7]";

const scheduleItems = [
  { day: "Monday", hours: "09:00 AM - 07:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 07:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 07:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 07:00 PM" },
  { day: "Friday", hours: "09:00 AM - 07:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 07:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export function AppointmentPageClient() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const canSubmit = useMemo(() => {
    return (
      Object.values(form).every((value) => value.trim().length > 0) &&
      isValidEmail(form.email) &&
      isValidPhone(form.phone)
    );
  }, [form]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.gender.trim()) nextErrors.gender = "Gender is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required";
    else if (!isValidPhone(form.phone)) nextErrors.phone = "Enter a valid phone number";
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
    setSubmitError("");

    if (!validate()) {
      setSubmitError("Please resolve the highlighted fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setErrors({});
      setForm(initialData);
    }, 1000);
  };

  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[170px] w-full overflow-hidden border-b-2 border-app-secondary sm:h-[190px]">
        <Image
          src="/images/contact.jpg"
          alt="Appointment page banner"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute left-[-3rem] top-0 h-32 w-32 rounded-full bg-app-secondary/20 blur-2xl" />

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4">
          <p className="font-body text-xs text-app-primary/80">Home / Appointment</p>
          <h1 className="mt-1 font-display-2 text-4xl text-app-primary md:text-5xl">
            Book an Appointment
          </h1>
        </div>
      </section>

      <main id="main-content">
        <section className="px-4 py-10">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <h2 className="font-display-2 text-3xl text-app-primary">Book an Appointment</h2>
              <p className="mt-3 max-w-[54ch] font-body text-sm leading-6 text-black/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quis eu tempor, accumsan bibendum
                posuere morbi. Convallis ipsum hac aliquet tortor amet lorem.
              </p>

              <form
                onSubmit={onSubmit}
                noValidate
                className="mt-6 overflow-hidden rounded-[2px] bg-app-primary"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="border-r-0 md:border-r md:border-[#9CB1DF]">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className={selectInputClasses}
                      placeholder="Name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.name}</p> : null}
                  </div>

                  <div className="relative">
                    <label htmlFor="gender" className="sr-only">Gender</label>
                    <select
                      id="gender"
                      value={form.gender}
                      onChange={(e) => setForm((prev) => ({ ...prev, gender: e.target.value }))}
                      className={selectInputClasses}
                      aria-invalid={Boolean(errors.gender)}
                    >
                      <option value="" className="text-black">Gender</option>
                      <option value="male" className="text-black">Male</option>
                      <option value="female" className="text-black">Female</option>
                      <option value="other" className="text-black">Other</option>
                    </select>
                    {errors.gender ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.gender}</p> : null}
                  </div>

                  <div className="border-r-0 md:border-r md:border-[#9CB1DF]">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      className={selectInputClasses}
                      placeholder="Email"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.email}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className={selectInputClasses}
                      placeholder="Phone"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.phone}</p> : null}
                  </div>

                  <div className="border-r-0 md:border-r md:border-[#9CB1DF]">
                    <label htmlFor="date" className="sr-only">Date</label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                      className={selectInputClasses}
                      aria-invalid={Boolean(errors.date)}
                    />
                    {errors.date ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.date}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="time" className="sr-only">Time</label>
                    <input
                      id="time"
                      type="time"
                      value={form.time}
                      onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))}
                      className={selectInputClasses}
                      aria-invalid={Boolean(errors.time)}
                    />
                    {errors.time ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.time}</p> : null}
                  </div>

                  <div className="border-r-0 md:border-r md:border-[#9CB1DF]">
                    <label htmlFor="doctor" className="sr-only">Doctor</label>
                    <select
                      id="doctor"
                      value={form.doctor}
                      onChange={(e) => setForm((prev) => ({ ...prev, doctor: e.target.value }))}
                      className={selectInputClasses}
                      aria-invalid={Boolean(errors.doctor)}
                    >
                      <option value="" className="text-black">Doctor</option>
                      <option value="dr-smith" className="text-black">Dr. Smith</option>
                      <option value="dr-jones" className="text-black">Dr. Jones</option>
                      <option value="dr-khan" className="text-black">Dr. Khan</option>
                    </select>
                    {errors.doctor ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.doctor}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="department" className="sr-only">Department</label>
                    <select
                      id="department"
                      value={form.department}
                      onChange={(e) => setForm((prev) => ({ ...prev, department: e.target.value }))}
                      className={selectInputClasses}
                      aria-invalid={Boolean(errors.department)}
                    >
                      <option value="" className="text-black">Department</option>
                      <option value="cardiology" className="text-black">Cardiology</option>
                      <option value="neurology" className="text-black">Neurology</option>
                      <option value="oncology" className="text-black">Oncology</option>
                      <option value="general-medicine" className="text-black">General Medicine</option>
                    </select>
                    {errors.department ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.department}</p> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="min-h-[96px] w-full resize-none border-b border-[#9CB1DF] bg-transparent px-4 py-3 text-xs text-white outline-none placeholder:text-[#BCD2F7]"
                    placeholder="Message"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? <p className="px-4 py-1 text-[11px] text-red-300">{errors.message}</p> : null}
                </div>

                <div className="bg-app-accent">
                  <button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="flex h-full w-full items-center justify-center px-4 py-3 font-body text-[11px] font-semibold tracking-[0.14em] text-app-primary transition hover:bg-[#a9c1ef] disabled:opacity-60"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                  <div aria-live="polite">
                    {submitted ? (
                      <p className="px-4 pb-3 text-xs text-center text-app-primary">Appointment request submitted. UI only.</p>
                    ) : null}
                    {submitError ? (
                      <p className="px-4 pb-3 text-xs text-center text-red-700">{submitError}</p>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>

            <aside className="rounded-[2px] bg-app-primary p-7 text-white">
              <h2 className="font-display-2 text-4xl text-app-accent">Shedule hours</h2>

              <div className="mt-8 space-y-4">
                {scheduleItems.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 text-sm">
                    <span>{item.day}</span>
                    <span className="text-white/70">—</span>
                    <span className="text-right text-white/90">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-app-accent" />
                  <div>
                    <p className="text-sm text-app-accent">Emergency</p>
                    <p className="text-lg">(237) 681-812-255</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 pb-14">
          <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2px] border border-[#d4dfef] bg-white">
            <iframe
              title="Appointment location map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-[300px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <ContactInfoSection />
      </main>

      <FooterSection />
    </div>
  );
}
