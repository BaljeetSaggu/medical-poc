import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";

const callToActionButtons = [
  {
    bgColor: "bg-app-primary",
    textColor: "text-white",
    text: "Book an Appointment",
    href: "/appointment",
    icon: "/icons/39Calendar.svg",
    iconAlt: "Calendar icon",
  },
  {
    bgColor: "bg-app-accent",
    textColor: "text-app-primary",
    text: "Find Doctor",
    href: "/doctors",
    icon: "/icons/27Team.svg",
    iconAlt: "Doctors team icon",
  },
  {
    bgColor: "bg-app-secondary",
    textColor: "text-white",
    text: "Service Information",
    href: "/services",
    icon: "/icons/15Cash.svg",
    iconAlt: "Service information icon",
  },
];

export const HeroCallToActionSection = () => {
  return (
    <section className="relative z-10 -mt-8 px-4 pb-8 sm:-mt-10">
      <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
        {callToActionButtons.map((button) => (
        <Button
          asChild
          key={button.text}
          className={`${button.bgColor} group h-auto rounded-[5px] px-6 py-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
        >
          <Link href={button.href} className="flex w-full items-center justify-between gap-4">
            <span
              className={`${button.textColor} text-left font-body text-base font-semibold leading-6`}
            >
              {button.text}
            </span>
            <Image
              alt={button.iconAlt}
              src={button.icon}
              width={52}
              height={52}
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </Button>
      ))}
      </div>
    </section>
  );
};
