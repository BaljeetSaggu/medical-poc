import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

const doctors = [
  { image: "/images/doctor-1.png", name: "Doctor's Name", specialty: "NEUROLOGY" },
  { image: "/images/doctor-2.png", name: "Doctor's Name", specialty: "NEUROLOGY" },
  { image: "/images/doctor-3.png", name: "Doctor's Name", specialty: "NEUROLOGY" },
  { image: "/images/doctor-1.png", name: "Doctor's Name", specialty: "NEUROLOGY" },
  { image: "/images/doctor-2.png", name: "Doctor's Name", specialty: "NEUROLOGY" },
  { image: "/images/doctor-3.png", name: "Doctor's Name", specialty: "NEUROLOGY" },
];

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

export const metadata: Metadata = {
  title: "Doctors",
  description:
    "Meet Meddical's doctors, browse specialist profiles, and explore related news and contact information.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
        <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
        <Image src="/images/doctors.png" alt="Our doctors" fill className="object-cover" />
        <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />
        <div className="absolute inset-0 flex overflow-hidden">
          <div className="ml-[-18rem] mt-[-20rem] h-[34rem] w-[34rem] rounded-full bg-app-secondary opacity-30" />
          <div className="ml-auto mr-[-12rem] mt-[6rem] h-[26rem] w-[26rem] rounded-full bg-app-accent opacity-50" />
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4">
          <p className="font-caption text-sm tracking-[2.88px] text-app-primary">
            Home / Doctors
          </p>
          <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">
            Our Doctors
          </h1>
        </div>
      </section>

      <main id="main-content">
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <p className="font-caption text-sm tracking-[2.88px] text-app-secondary">
              TRUSTED CARE
            </p>
            <h2 className="mt-3 font-display-2 text-3xl text-app-primary md:text-4xl">
              Our Doctors
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <article
                key={`${doctor.name}-${index}`}
                className="overflow-hidden rounded-[6px] border border-[#d6e1f5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={380}
                  height={360}
                  className="h-[320px] w-full object-cover object-top"
                />

                <div className="bg-[#bfd2f8] px-4 py-5 text-center">
                  <p className="text-lg text-[#1f2b6c]">{doctor.name}</p>
                  <p className="mt-1 text-xs tracking-[0.18em] text-[#1f2b6c]">
                    {doctor.specialty}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <Image src="/icons/in.svg" alt="LinkedIn" width={18} height={18} />
                    <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} />
                    <Image src="/icons/insta.svg" alt="Instagram" width={18} height={18} />
                  </div>
                </div>

                <Link
                  href="/doctors"
                  className="block w-full bg-[#1f2b6c] py-3 text-center text-sm text-white transition hover:bg-[#16205a]"
                >
                  View Profile
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-14">
          <Image src="/images/book-apointment.png" alt="Quote background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#1f2b6c]/80" />
          <div className="relative mx-auto max-w-3xl px-4 text-center text-white">
            <p className="text-sm leading-7 text-[#e4ebff]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.
            </p>
            <div className="mx-auto my-6 h-px w-16 bg-[#bfd2f8]" />
            <p className="text-xs tracking-[0.2em] text-[#bfd2f8]">JOHN DOE</p>
          </div>
        </section>

        <section className="bg-[#f7fafd] py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 text-center">
              <p className="text-xs tracking-[0.2em] text-[#159eec]">BETTER INFORMATION, BETTER HEALTH</p>
              <h2 className="mt-2 font-display-2 text-3xl text-[#1f2b6c]">News</h2>
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

        <ContactInfoSection />
      </main>

      <FooterSection />
    </div>
  );
}
