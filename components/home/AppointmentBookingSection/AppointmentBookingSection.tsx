"use client";

import { type FormEvent, JSX, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../../ui/button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  doctor: string;
  department: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  doctor: "",
  department: "",
  message: "",
};

const emailPattern = /\S+@\S+\.\S+/;
const phonePattern = /^[0-9+\-\s()]{7,20}$/;

const fieldBaseClasses =
  "h-[66px] w-full border-b border-[#9CB1DF] bg-transparent px-7 text-base text-white outline-none placeholder:text-white";
const leftFieldClasses = `${fieldBaseClasses} border-r border-[#9CB1DF]`;
const rightFieldClasses = fieldBaseClasses;

export default function AppointmentBookingSection(): JSX.Element {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const requiredValues = [
      values.name,
      values.email,
      values.phone,
      values.date,
      values.time,
      values.doctor,
      values.department,
      values.message,
    ];
    const allFieldsFilled = requiredValues.every((value) => value.trim().length > 0);

    if (!allFieldsFilled) {
      setError("Please fill all required fields.");
      return false;
    }

    if (!emailPattern.test(values.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!phonePattern.test(values.phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setValues(initialValues);
    }, 1000);
  };

  return (
    <section className="w-full overflow-hidden rounded-[5px] bg-app-primary shadow-xl">
      <form onSubmit={handleSubmit} noValidate className="overflow-hidden rounded-[5px] border border-[#9CB1DF]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <input
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className={leftFieldClasses}
            placeholder="Name"
            name="name"
            aria-label="Name"
          />

          <input
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className={rightFieldClasses}
            placeholder="Email"
            name="email"
            aria-label="Email"
          />

          <input
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className={leftFieldClasses}
            placeholder="Phone"
            name="phone"
            aria-label="Phone"
          />

          <div className="relative">
            <select
              value={values.date}
              onChange={(event) => handleChange("date", event.target.value)}
              className={`${rightFieldClasses} appearance-none`}
              name="date"
              aria-label="Date"
            >
              <option value="" className="text-black">
                Date
              </option>
              <option value="2026-03-01" className="text-black">
                March 1, 2026
              </option>
              <option value="2026-03-02" className="text-black">
                March 2, 2026
              </option>
              <option value="2026-03-03" className="text-black">
                March 3, 2026
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          </div>

          <div className="relative">
            <select
              value={values.time}
              onChange={(event) => handleChange("time", event.target.value)}
              className={`${leftFieldClasses} appearance-none`}
              name="time"
              aria-label="Time"
            >
              <option value="" className="text-black">
                Time
              </option>
              <option value="09:00" className="text-black">
                09:00 AM
              </option>
              <option value="11:00" className="text-black">
                11:00 AM
              </option>
              <option value="14:00" className="text-black">
                02:00 PM
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          </div>

          <div className="relative">
            <select
              value={values.doctor}
              onChange={(event) => handleChange("doctor", event.target.value)}
              className={`${rightFieldClasses} appearance-none`}
              name="doctor"
              aria-label="Doctor"
            >
              <option value="" className="text-black">
                Doctor
              </option>
              <option value="dr-smith" className="text-black">
                Dr. Smith
              </option>
              <option value="dr-jones" className="text-black">
                Dr. Jones
              </option>
              <option value="dr-khan" className="text-black">
                Dr. Khan
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          </div>

          <div className="relative">
            <select
              value={values.department}
              onChange={(event) => handleChange("department", event.target.value)}
              className={`${leftFieldClasses} appearance-none`}
              name="department"
              aria-label="Department"
            >
              <option value="" className="text-black">
                Department
              </option>
              <option value="cardiology" className="text-black">
                Cardiology
              </option>
              <option value="neurology" className="text-black">
                Neurology
              </option>
              <option value="oncology" className="text-black">
                Oncology
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          </div>
        </div>

        <textarea
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="h-[190px] w-full resize-none border-b border-[#9CB1DF] bg-transparent px-7 py-5 text-base text-white outline-none placeholder:text-white"
          placeholder="Message"
          name="message"
          aria-label="Message"
        />

        <div className="bg-app-accent px-4 py-6 text-center">
          <Button
            type="submit"
            variant="ghost"
            disabled={isSubmitting}
            className="h-auto rounded-none p-0 font-body text-base font-semibold tracking-[0.5px] text-app-primary hover:bg-transparent"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </Button>
          {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
          {isSubmitted && (
            <p className="mt-2 text-sm text-app-primary">
              Appointment submitted successfully. (UI only)
            </p>
          )}
        </div>
      </form>
    </section>
  );
};
