import Link from "next/link";
import Image from "next/image";
import { Activity, ArrowRight, HeartPulse, ShieldPlus, Syringe } from "lucide-react";
import { Button } from "../../components/ui/button";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { JSX } from "react";


const services = [
  {
    title: "Cardiology",
    description: "Preventive diagnostics, heart health screening, and specialty consultation.",
    icon: Activity,
  },
  {
    title: "Neurology",
    description: "Clinical evaluation and personalized treatment plans for neurological care.",
    icon: HeartPulse,
  },
  {
    title: "Oncology",
    description: "Structured oncology support pathways with coordinated follow-up care.",
    icon: ShieldPlus,
  },
  {
    title: "General Medicine",
    description: "Primary consultations, routine checkups, and continuity for long-term health.",
    icon: Syringe,
  },
];

export default function Services(): JSX.Element {
  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <main>
        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-caption text-sm tracking-[2px] text-app-secondary">CARE YOU CAN BELIEVE IN</p>
              <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">Our Services</h1>
              <p className="mt-4 max-w-2xl font-body text-black/80">
                Explore core clinical specialties delivered by experienced teams and modern equipment.
              </p>
            </div>
            <Button asChild className="rounded-full bg-app-primary px-6 hover:bg-app-primary/90">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-xl border border-app-accent/40 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-full bg-app-accent/30 p-3 text-app-primary transition-colors group-hover:bg-app-primary group-hover:text-app-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-title text-2xl text-app-primary">{service.title}</h2>
                  <p className="mt-3 font-body text-sm leading-6 text-black/80">{service.description}</p>
                  <Link
                    href="/appointment"
                    className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-app-secondary"
                  >
                    Request Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-xl border border-app-accent/30 bg-white shadow-sm">
              <Image
                src="/placeholder-banner.svg"
                alt="Clinical service environment"
                width={1200}
                height={700}
                className="h-auto w-full"
              />
            </div>
            <div>
              <h2 className="font-display-2 text-3xl text-app-primary md:text-4xl">Integrated Service Delivery</h2>
              <p className="mt-4 font-body leading-7 text-black/80">
                Every department is aligned through shared protocols, helping patients move quickly from
                consultation to diagnosis and follow-up.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};
