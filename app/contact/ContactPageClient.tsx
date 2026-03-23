"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Clock3, Eye, Heart, Mail, MapPin, PhoneCall } from "lucide-react";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { newsPosts } from "../../lib/news";

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export function ContactPageClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const newsItems = newsPosts.slice(0, 4);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="bg-[#f6f7f9]">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[220px] overflow-hidden px-4 sm:h-[260px]">
        <Image src="/images/contact.jpg" alt="Hospital corridor and care team" fill className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,247,249,0.96)_0%,rgba(246,247,249,0.74)_42%,rgba(246,247,249,0.2)_100%)]" />
        <div className="absolute left-[-5rem] top-[-6rem] h-52 w-52 rounded-full bg-app-secondary/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-[5rem] h-56 w-56 rounded-full bg-app-accent/50 blur-3xl" />
        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
          <p className="font-caption text-sm tracking-[2.88px] text-app-primary">Home / Contact</p>
          <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">Our Contacts</h1>
        </div>
      </section>

      <main id="main-content">
        <section className="px-4 py-8 md:py-10">
          <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2px] border border-[#d4dfef] bg-white">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-[270px] w-full md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="px-4 pb-12 pt-4">
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-caption text-xs tracking-[0.2em] text-[#159eec]">GET IN TOUCH</p>
            <h2 className="mt-2 font-display-2 text-4xl text-[#1f2b6c]">Contact</h2>

            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr]">
              <form onSubmit={onSubmit} noValidate className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-[3px] border border-[#1f2b6c] bg-[#1f2b6c]">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <label htmlFor="contact-name" className="sr-only">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-11 border-b border-[#5a669e] bg-transparent px-4 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none"
                    aria-invalid={Boolean(error) && !name.trim()}
                  />
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-11 border-b border-[#5a669e] bg-transparent px-4 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none md:border-l"
                    aria-invalid={Boolean(error) && (!email.trim() || !isValidEmail(email))}
                  />
                </div>
                <label htmlFor="contact-subject" className="sr-only">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="h-11 w-full border-b border-[#5a669e] bg-transparent px-4 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none"
                  aria-invalid={Boolean(error) && !subject.trim()}
                />
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-[180px] w-full flex-1 resize-none bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none"
                  aria-invalid={Boolean(error) && !message.trim()}
                />
                <div className="mt-auto border-t border-[#5a669e] bg-[#bfd2f8] px-4 py-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-body text-xs font-semibold tracking-[0.08em] text-[#1f2b6c]"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>
                <div aria-live="polite">
                  {error ? <p className="px-4 py-2 text-xs text-red-300">{error}</p> : null}
                  {success ? <p className="px-4 pb-3 text-xs text-green-300">Message sent successfully (UI only).</p> : null}
                </div>
              </form>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="min-h-[180px] rounded-[3px] bg-[#bfd2f8] p-5 text-[#1f2b6c]">
                  <PhoneCall className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">EMERGENCY</p>
                  <p className="mt-2 text-xs leading-5">(237) 681-812-255</p>
                  <p className="text-xs leading-5">(237) 666-331-894</p>
                </article>

                <article className="min-h-[180px] rounded-[3px] bg-[#1f2b6c] p-5 text-white">
                  <MapPin className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">LOCATION</p>
                  <p className="mt-2 text-xs leading-5">0123 Some Place</p>
                  <p className="text-xs leading-5">9876 Some country</p>
                </article>

                <article className="min-h-[180px] rounded-[3px] bg-[#bfd2f8] p-5 text-[#1f2b6c]">
                  <Mail className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">EMAIL</p>
                  <p className="mt-2 text-xs leading-5">hello@meddical.com</p>
                  <p className="text-xs leading-5">support@meddical.com</p>
                </article>

                <article className="min-h-[180px] rounded-[3px] bg-[#bfd2f8] p-5 text-[#1f2b6c]">
                  <Clock3 className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">WORKING HOURS</p>
                  <p className="mt-2 text-xs leading-5">Mon-Sat 09:00-20:00</p>
                  <p className="text-xs leading-5">Sunday Emergency only</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 pt-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8 text-center">
              <p className="text-xs tracking-[0.2em] text-[#159eec]">BETTER INFORMATION, BETTER HEALTH</p>
              <h2 className="mt-2 text-3xl font-display-2 text-[#1f2b6c]">News</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {newsItems.map((item, index) => (
                <article key={index} className="flex overflow-hidden rounded-[4px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.08)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={100}
                    className="h-[108px] w-[108px] object-cover"
                  />
                  <div className="flex-1 px-4 py-3">
                    <p className="text-[11px] text-[#159eec]">{item.date} | By Author</p>
                    <p className="mt-1 text-sm text-[#212124]">
                      <Link href={`/news/${item.slug}`} className="hover:text-app-secondary">
                        {item.title}
                      </Link>
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-[#1f2b6c]">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        {item.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3.5 w-3.5" />
                        {item.likes}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex justify-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#bfd2f8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1f2b6c]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#bfd2f8]" />
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
