import type { Metadata } from "next";
import Image from "next/image";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { DoctorsProfilesSection } from "components/home/DoctorsProfilesSection/DoctorsProfilesSection";
import { FooterSection } from "components/home/FooterSection";
import { HeroCallToActionSection } from "components/home/HeroCallToActionSection";
import { HeroSection } from "components/home/HeroSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { NewsUpdatesSection } from "components/home/NewsUpdatesSection";
import { ServicesDetailsSection } from "components/home/ServicesDetailsSection";
import { ServicesOverviewSection } from "components/home/ServicesOverviewSection/ServicesOverviewSection";
import { SpecialtiesSection } from "components/home/SpecialtiesSection";
import { TopBarSection } from "components/home/TopBarSection";
import { WelcomeSection } from "components/home/WelcomeSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Meddical healthcare services, specialties, appointment booking preview, doctors, and contact information.",
};

export default function Page() {
  return (
    <div className="relative w-full bg-white">
      <TopBarSection />
      <NavigationBarSection />
      <main id="main-content">
        <HeroSection />
        <HeroCallToActionSection />
        <WelcomeSection />
        <section className="flex w-full justify-center px-4 py-8">
          <Image
            className="h-auto w-full max-w-[992px]"
            alt="Medical team collaborating in a hospital setting"
            src="/images/group-183.png"
            width={992}
            height={510}
          />
        </section>
        <ServicesDetailsSection />
        <ServicesOverviewSection />
        <SpecialtiesSection />
        <DoctorsProfilesSection />
        <NewsUpdatesSection />
        <ContactInfoSection />
      </main>
      <FooterSection />
    </div>
  );
}
