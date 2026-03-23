import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { Button } from "../../../components/ui/button";
import { getServiceBySlug, services } from "../../../lib/services";

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
        <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
        <Image src="/images/doctors.png" alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />
        <div className="absolute inset-0 flex overflow-hidden">
          <div className="ml-[-18rem] mt-[-20rem] h-[34rem] w-[34rem] rounded-full bg-app-secondary opacity-30" />
          <div className="ml-auto mr-[-12rem] mt-[6rem] h-[26rem] w-[26rem] rounded-full bg-app-accent opacity-50" />
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4">
          <p className="font-caption text-sm tracking-[2.88px] text-app-primary">
            Home / Services / {service.title}
          </p>
          <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">
            {service.title}
          </h1>
        </div>
      </section>

      <main id="main-content" className="px-4 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row">
          <aside className="w-full lg:w-[220px] lg:flex-shrink-0">
            <div className="overflow-hidden rounded-[6px] border border-[#d6e1f5] bg-white">
              {services.slice(0, 4).map((item) => {
                const ItemIcon = item.icon;
                const active = item.slug === service.slug;

                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className={`flex flex-col items-center gap-2 border-b border-[#d6e1f5] px-6 py-6 text-center transition-colors last:border-b-0 ${
                      active ? "bg-app-primary text-app-accent" : "hover:bg-[#f7fbff]"
                    }`}
                  >
                    <ItemIcon className="h-8 w-8" />
                    <span className="font-body text-sm font-medium">{item.title}</span>
                  </Link>
                );
              })}
              <div className="bg-app-primary p-4">
                <Button asChild variant="ghost" className="w-full text-app-accent hover:bg-transparent hover:text-app-accent">
                  <Link href="/services">View All</Link>
                </Button>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
              <div>
                <div className="overflow-hidden rounded-[6px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={520}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-8">
                  <div className="inline-flex rounded-full bg-app-accent/35 p-4 text-app-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 font-display-2 text-3xl text-app-primary md:text-4xl">
                    A passion for putting patients first.
                  </h2>

                  <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.featurePoints.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <span className="h-4 w-4 rounded-full bg-app-secondary" />
                        <span className="font-body text-sm text-black/85">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4 font-body leading-7 text-black/80">
                    {service.longDescription.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild className="rounded-full bg-app-primary px-6 text-white hover:bg-app-primary/90">
                      <Link href="/appointment" className="inline-flex items-center gap-2">
                        Book Appointment
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {service.sideImages.map((image, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`${service.title} supporting visual ${index + 1}`}
                    width={320}
                    height={220}
                    className="h-auto w-full rounded-[6px] object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="relative overflow-hidden py-16">
        <Image
          src="/images/book-apointment.png"
          alt="Service testimonial background"
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
      <FooterSection />
    </div>
  );
}
