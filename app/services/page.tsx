import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { Button } from "../../components/ui/button";
import { services } from "../../lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse Meddical's healthcare specialties, service highlights, and appointment pathways.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
        <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
        <Image src="/images/doctors.png" alt="Medical services" fill className="object-cover" />
        <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />
        <div className="absolute inset-0 flex overflow-hidden">
          <div className="ml-[-18rem] mt-[-20rem] h-[34rem] w-[34rem] rounded-full bg-app-secondary opacity-30" />
          <div className="ml-auto mr-[-12rem] mt-[6rem] h-[26rem] w-[26rem] rounded-full bg-app-accent opacity-50" />
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4">
          <p className="font-caption text-sm tracking-[2.88px] text-app-primary">
            Home / Services
          </p>
          <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">
            Our Services
          </h1>
        </div>
      </section>

      <main id="main-content">
        <section className="px-4 py-16">
          <div className="mx-auto w-full max-w-6xl text-center">
            <p className="font-caption text-sm tracking-[2.88px] text-app-secondary">
              CARE YOU CAN BELIEVE IN
            </p>
            <h2 className="mt-3 font-display-2 text-3xl text-app-primary md:text-4xl">
              A passion for putting patients first.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl font-body leading-7 text-black/80">
              Explore core clinical specialties delivered by experienced teams, coordinated care pathways, and modern facilities designed to make every stage of treatment feel clear and supported.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="group flex h-full flex-col rounded-[6px] border border-[#d6e1f5] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex w-fit rounded-full bg-app-accent/35 p-4 text-app-primary transition-colors duration-300 group-hover:bg-app-primary group-hover:text-app-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-title text-2xl text-app-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-7 text-black/80">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="mt-5 h-auto justify-start p-0 text-app-secondary hover:no-underline">
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f7fbff] px-4 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-[6px]">
              <Image
                src="/images/group-183.png"
                alt="Medical team and hospital services"
                width={992}
                height={510}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p className="font-caption text-sm tracking-[2.88px] text-app-secondary">
                SERVICE DETAIL PREVIEW
              </p>
              <h2 className="mt-3 font-display-2 text-3xl text-app-primary md:text-4xl">
                Structured specialty care across every department.
              </h2>
              <p className="mt-5 font-body leading-7 text-black/80">
                Each service detail page now has its own route, making the experience closer to the Meddical layout pattern and giving you a dedicated single-service page for review, feedback, and future scaling.
              </p>
              <Button asChild className="mt-6 rounded-full bg-app-primary px-6 text-white hover:bg-app-primary/90">
                <Link href={`/services/${services[1].slug}`}>Open Sample Service</Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactInfoSection />
      </main>

      <FooterSection />
    </div>
  );
}
