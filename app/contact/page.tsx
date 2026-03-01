"use client";

import { FormEvent, JSX, useState } from "react";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

const contactCards = [
  { title: "Emergency", value: "(237) 681-812-255", icon: PhoneCall },
  { title: "Email", value: "hello@meddical.com", icon: Mail },
  { title: "Location", value: "0123 Some Place", icon: MapPin },
];

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export default function Contact(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <main>
        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-caption text-sm tracking-[2px] text-app-secondary">GET IN TOUCH</p>
            <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">Contact Us</h1>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-xl border border-app-accent/40 bg-white p-5 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full bg-app-accent/35 p-3 text-app-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-title text-xl text-app-primary">{card.title}</h2>
                  <p className="mt-2 font-body text-sm text-black/80">{card.value}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-app-accent/40 bg-[#f7fbff] p-6 shadow-sm md:p-10">
            <h2 className="font-display-2 text-3xl text-app-primary">Send a Message</h2>
            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-body text-sm font-semibold text-app-primary">Name</label>
                <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-body text-sm font-semibold text-app-primary">Email</label>
                <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block font-body text-sm font-semibold text-app-primary">Message</label>
                <Textarea id="contact-message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {success && <p className="text-sm text-green-700">Message sent successfully (UI only).</p>}

              <Button
                type="submit"
                disabled={loading}
                className="rounded-full bg-app-primary px-8 text-white hover:bg-app-primary/90"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};
