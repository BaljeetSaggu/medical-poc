import type { Metadata } from "next";
import { AppointmentPageClient } from "./AppointmentPageClient";

export const metadata: Metadata = {
  title: "Appointment",
  description:
    "Book a UI-only appointment with client-side validation for patient details, schedule, doctor, and department.",
};

export default function AppointmentPage() {
  return <AppointmentPageClient />;
}
