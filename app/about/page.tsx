import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

const valueItems = [
  {
    title: "Patient-Centered Care",
    description:
      "We prioritize safety, comfort, and compassionate treatment in every touchpoint.",
    icon: HeartHandshake,
  },
  {
    title: "Medical Excellence",
    description:
      "Our multidisciplinary teams follow modern clinical standards and evidence-based care.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Technology",
    description:
      "Diagnostics, treatment support, and workflow systems are designed for reliable, efficient care.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Outcomes",
    description:
      "Consistent quality, transparent communication, and continuity across departments.",
    icon: CheckCircle2,
  },
];

const featurePoints = [
  "A passion for healing",
  "5-star care",
  "All our best",
  "Believe in us",
  "A legacy of excellence",
  "Always caring",
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meddical's mission, values, facility standards, and patient-centered care approach.",
};

export default function About() {
  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
        <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
        <Image src="/images/doctors.png" alt="Medical team" fill className="object-cover" />
        <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />
        <div className="absolute inset-0 flex overflow-hidden">
          <div className="ml-[-18rem] mt-[-20rem] h-[34rem] w-[34rem] rounded-full bg-app-secondary opacity-30" />
          <div className="ml-auto mr-[-12rem] mt-[6rem] h-[26rem] w-[26rem] rounded-full bg-app-accent opacity-50" />
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4">
          <p className="font-caption text-sm tracking-[2.88px] text-app-primary">
            Home / About
          </p>
          <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <main id="main-content">
        <section className="px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="order-2 lg:order-1">
              <p className="font-caption text-sm tracking-[2.88px] text-app-secondary">
                WELCOME TO MEDDICAL
              </p>
              <h2 className="mt-3 max-w-[14ch] font-display-2 text-4xl leading-tight text-app-primary md:text-5xl">
                A great place to receive care.
              </h2>
              <p className="mt-5 max-w-[60ch] font-body leading-7 text-black/80">
                We combine experienced professionals, advanced facilities, and a patient-first approach to deliver dependable healthcare experiences for families and individuals.
              </p>

              <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {featurePoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="h-4 w-4 rounded-full bg-app-secondary" />
                    <span className="font-body text-sm text-black/85">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 font-body leading-7 text-black/80">
                <p>
                  Meddical is designed to make healthcare feel clear, calm, and coordinated. From first consultation to ongoing follow-up, our teams focus on communication, accuracy, and patient confidence.
                </p>
                <p>
                  Our mission is to provide high-quality, accessible, and empathetic healthcare. Our vision is to be the region&apos;s most trusted destination for complete medical wellness.
                </p>
              </div>
            </div>

            <div className="order-1 grid gap-6 sm:grid-cols-2 lg:order-2 lg:grid-cols-1">
              <Image
                src="/images/group-186.png"
                alt="Doctors discussing patient care"
                width={520}
                height={320}
                className="h-auto w-full rounded-[6px] object-cover"
              />
              <Image
                src="/images/group-187.png"
                alt="Hospital team in a clinical environment"
                width={520}
                height={320}
                className="h-auto w-full rounded-[6px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="font-caption text-sm tracking-[2.88px] text-app-secondary">
                CARE YOU CAN BELIEVE IN
              </p>
              <h2 className="mt-3 font-display-2 text-3xl text-app-primary md:text-4xl">
                Values & Why Choose Us
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {valueItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-app-accent/40 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-app-accent/40 p-3 text-app-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-title text-xl text-app-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-6 text-black/80">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-[6px]">
              <Image
                src="/images/group-183.png"
                alt="Medical facility and staff"
                width={992}
                height={510}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p className="font-caption text-sm tracking-[2.88px] text-app-secondary">
                OUR TEAM & FACILITY
              </p>
              <h2 className="mt-3 font-display-2 text-3xl text-app-primary md:text-4xl">
                Built for coordinated, modern care.
              </h2>
              <p className="mt-5 font-body leading-7 text-black/80">
                Skilled clinicians and support teams work in coordinated units equipped for diagnostics, treatment, and recovery. Our environment is designed for efficient care, patient comfort, and consistent outcomes across specialties.
              </p>
              <p className="mt-4 font-body leading-7 text-black/80">
                Clean circulation, organized workflows, and accessible care points help patients move smoothly from consultation to diagnosis and follow-up.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16">
          <Image
            src="/images/book-apointment.png"
            alt="Hospital interior background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-app-primary/80" />
          <div className="relative mx-auto max-w-3xl px-4 text-center text-white">
            <p className="font-body text-base leading-7 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.
            </p>
            <div className="mx-auto my-6 h-px w-16 bg-app-accent" />
            <p className="font-caption text-sm tracking-[2.88px] text-app-accent">
              JOHN DOE
            </p>
          </div>
        </section>

        <ContactInfoSection />
      </main>

      <FooterSection />
    </div>
  );
}
