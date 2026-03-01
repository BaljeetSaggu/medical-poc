import { AppointmentBookingSection } from "components/home/AppointmentBookingSection";
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

export default function Page() {
  return (
    <div className="relative w-full bg-white">
      <TopBarSection />
      <NavigationBarSection />
      <HeroSection />
      <HeroCallToActionSection />
      <WelcomeSection />
      <div className="flex w-full justify-center px-4 py-8">
        <img
          className="h-auto w-full max-w-[992px]"
          alt="Medical team"
          src="/images/group-183.png"
        />
      </div>
      <ServicesDetailsSection />
      <ServicesOverviewSection />
      <div className="relative">
        <SpecialtiesSection />
        {/* <div className="absolute left-1/2 top-1/2 w-[min(95vw,992px)] -translate-x-1/2 -translate-y-1/2">
          <AppointmentBookingSection />
        </div> */}
      </div>
      <DoctorsProfilesSection />
      <NewsUpdatesSection />
      <ContactInfoSection />
      <FooterSection />
    </div>
  );
}
