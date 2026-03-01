import Image from "next/image";
import { CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";

const valueItems = [
  {
    title: "Patient-Centered Care",
    description:
      "We prioritize safety, comfort, and compassionate treatment in every touchpoint.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Excellence",
    description:
      "Our multidisciplinary teams follow modern clinical standards and evidence-based care.",
    icon: Stethoscope,
  },
  {
    title: "Trusted Outcomes",
    description:
      "Consistent quality, transparent communication, and continuity across departments.",
    icon: CheckCircle2,
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <main>
        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-caption text-sm tracking-[2px] text-app-secondary">
                ABOUT MEDDICAL
              </p>
              <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">
                A modern clinic focused on trusted care.
              </h1>
              <p className="mt-5 font-body text-base leading-7 text-black/80">
                We combine experienced professionals, advanced facilities, and a
                patient-first approach to deliver dependable healthcare
                experiences for families and individuals.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-app-accent/30 bg-white shadow-sm">
              <Image
                src="/placeholder-banner.svg"
                alt="Hospital care environment"
                width={1200}
                height={700}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-display-2 text-3xl text-app-primary md:text-4xl">
                Mission & Vision
              </h2>
              <p className="mt-4 font-body text-black/80">
                Our mission is to provide high-quality, accessible, and
                empathetic healthcare. Our vision is to be the region&apos;s
                most trusted destination for complete medical wellness.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {valueItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-app-accent/40 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
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

        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display-2 text-3xl text-app-primary md:text-4xl">
                Our Team & Facility
              </h2>
              <p className="mt-4 font-body leading-7 text-black/80">
                Skilled clinicians and support teams work in coordinated units
                equipped for diagnostics, treatment, and recovery. Our
                environment is designed for efficient care and patient comfort.
              </p>
            </div>
            <div className="order-1 overflow-hidden rounded-xl border border-app-accent/30 bg-white shadow-sm md:order-2">
              <Image
                src="/placeholder-banner.svg"
                alt="Medical team and facility overview"
                width={1200}
                height={700}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};
