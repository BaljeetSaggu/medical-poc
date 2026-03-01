import Image from "next/image";
import { JSX } from "react";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";

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

const contactCards = [
  {
    icon: "/icons/phone.svg",
    title: "EMERGENCY",
    line1: "(237) 681-812-255",
    line2: "(237) 666-331-894",
    dark: false,
  },
  {
    icon: "/icons/location.svg",
    title: "LOCATION",
    line1: "0123 Some place",
    line2: "9876 Some country",
    dark: true,
  },
  {
    icon: "/icons/email.svg",
    title: "EMAIL",
    line1: "fildineeesoe@gmil.com",
    line2: "myebstudios@gmail.com",
    dark: false,
  },
  {
    icon: "/icons/clock.svg",
    title: "WORKING HOURS",
    line1: "Mon-Sat 09:00-20:00",
    line2: "Sunday Emergency only",
    dark: false,
  },
];

export default function Doctors(): JSX.Element {
  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

    <section  className="relative h-[180px] w-full overflow-hidden sm:h-[220px]">
      <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
      <Image src="/images/doctors.png" alt="Our doctors" fill className="object-cover" />

      <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />

      <div className="absolute inset-0 flex gap-[542px] overflow-hidden">
        <div className="mt-[-599px] ml-[-387px] bg-app-secondary opacity-30 w-[734px] h-[734px] rounded-full" />
        <div className="mt-[199px] bg-app-accent opacity-50 w-[734px] h-[734px] rounded-full" />
      </div>

      <div className="absolute top-[50px] left-[186px] flex flex-col gap-2 max-w-[523px]">
        <p className="font-caption font-bold text-app-secondary text-lg tracking-[2.88px] leading-normal whitespace-nowrap">
          Home/Doctors
        </p>

        <h1 className="font-display-2 font-normal text-app-primary text-5xl tracking-normal leading-normal mt-2">
          Our Doctors
        </h1>
      </div>
    </section>

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <article key={index} className="overflow-hidden rounded-[4px] border border-[#d6e1f5] bg-white">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={380}
                height={360}
                className="h-[290px] w-full object-cover object-top"
              />
              <div className="bg-[#bfd2f8] px-4 py-4 text-center">
                <p className="text-sm text-[#1f2b6c]">{doctor.name}</p>
                <p className="mt-1 text-xs tracking-[0.15em] text-[#1f2b6c]">{doctor.specialty}</p>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <Image src="/icons/in.svg" alt="LinkedIn" width={15} height={15} />
                  <Image src="/icons/facebook.svg" alt="Facebook" width={15} height={15} />
                  <Image src="/icons/insta.svg" alt="Instagram" width={15} height={15} />
                </div>
              </div>
              <button className="w-full bg-[#1f2b6c] py-2 text-sm text-white transition hover:bg-[#16205a]">
                View Profile
              </button>
            </article>
          ))}
        </section>
      </main>

      <section className="relative mt-2 overflow-hidden py-14">
        <Image src="/images/book-apointment.png" alt="Quote background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1f2b6c]/80" />
        <div className="relative mx-auto max-w-3xl px-4 text-center text-white">
          <p className="text-sm leading-6 text-[#e4ebff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.
          </p>
          <div className="mx-auto my-6 h-[1px] w-16 bg-[#bfd2f8]" />
          <p className="text-xs tracking-[0.2em] text-[#bfd2f8]">John Doe</p>
        </div>
      </section>

      <section className="bg-[#f7fafd] py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
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
                      <Image src="/icons/eyes.svg" alt="Views" width={14} height={14} />
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Image src="/icons/like.svg" alt="Likes" width={14} height={14} />
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
      <FooterSection />
    </div>
  );
}
