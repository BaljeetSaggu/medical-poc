import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Meddical through the UI-only contact form and review key hospital contact details and working hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
