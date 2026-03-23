"use client";

import Image from "next/image";
import { FormEvent, JSX, useState } from "react";
import { Clock3, Eye, Heart, Mail, MapPin, PhoneCall } from "lucide-react";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

const newsItems = [
  {
    image: "/images/news.png",
    date: "Monday 05, September 2021",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    image: "/images/news.png",
    date: "Monday 05, September 2021",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    image: "/images/news.png",
    date: "Monday 05, September 2021",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    image: "/images/news.png",
    date: "Monday 05, September 2021",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
];

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export default function Contact(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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

    setTimeout(() => {
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
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[220px]">
              <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
              <Image src="/images/contact.jpg" alt="Our doctors" fill className="object-cover" />
      
              <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />
      
              <div className="absolute inset-0 flex gap-[542px] overflow-hidden">
                <div className="mt-[-599px] ml-[-387px] bg-app-secondary opacity-30 w-[734px] h-[734px] rounded-full" />
                <div className="mt-[199px] bg-app-accent opacity-50 w-[734px] h-[734px] rounded-full" />
              </div>
      
              <div className="absolute top-[50px] left-[186px] flex flex-col max-w-[523px]">
                <p className="font-caption font-normal text-app-primary text-sm tracking-[2.88px] whitespace-nowrap">
                  Home/Contact
                </p>
      
                <h1 className="font-display-2 font-normal text-app-primary text-5xl tracking-normal mt-2">
                  Our Contacts
                </h1>
              </div>
            </section>
      <main>
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
              <form
                onSubmit={onSubmit}
                noValidate
                className="overflow-hidden rounded-[3px] border border-[#1f2b6c] bg-[#1f2b6c]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-11 border-b border-[#5a669e] bg-transparent px-4 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-11 border-b border-[#5a669e] bg-transparent px-4 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none md:border-l"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="h-11 w-full border-b border-[#5a669e] bg-transparent px-4 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#bfd2f8] focus:outline-none"
                />
                <div className="border-t border-[#5a669e] bg-[#bfd2f8] px-4 py-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-body text-xs font-semibold tracking-[0.08em] text-[#1f2b6c]"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>
                {error ? (
                  <p className="px-4 py-2 text-xs text-red-300">{error}</p>
                ) : null}
                {success ? (
                  <p className="px-4 pb-3 text-xs text-green-300">Message sent successfully (UI only).</p>
                ) : null}
              </form>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="rounded-[3px] bg-[#bfd2f8] p-5 text-[#1f2b6c]">
                  <PhoneCall className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">EMERGENCY</p>
                  <p className="mt-2 text-xs leading-5">(237) 681-812-255</p>
                  <p className="text-xs leading-5">(237) 666-331-894</p>
                </article>

                <article className="rounded-[3px] bg-[#1f2b6c] p-5 text-white">
                  <MapPin className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">LOCATION</p>
                  <p className="mt-2 text-xs leading-5">0123 Some Place</p>
                  <p className="text-xs leading-5">9876 Some country</p>
                </article>

                <article className="rounded-[3px] bg-[#bfd2f8] p-5 text-[#1f2b6c]">
                  <Mail className="h-5 w-5" />
                  <p className="mt-4 text-xs font-bold tracking-[0.1em]">EMAIL</p>
                  <p className="mt-2 text-xs leading-5">i.noreesoe@gmail.com</p>
                  <p className="text-xs leading-5">myebstudios@gmail.com</p>
                </article>

                <article className="rounded-[3px] bg-[#bfd2f8] p-5 text-[#1f2b6c]">
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
              <h2 className="mt-2 text-3xl font-semibold text-[#1f2b6c]">News</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="flex overflow-hidden rounded-[4px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={100}
                    className="h-[108px] w-[108px] object-cover"
                  />
                  <div className="flex-1 px-4 py-3">
                    <p className="text-[11px] text-[#159eec]">{item.date} | By Author</p>
                    <p className="mt-1 text-sm text-[#212124]">{item.title}</p>
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
