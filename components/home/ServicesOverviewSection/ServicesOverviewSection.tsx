import { JSX } from "react";
import { Card, CardContent } from "../../ui/card";

const specialties = [
  {
    name: "Neurology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Bones",
    icon: "/icons/vector-3.svg",
    position: "top-[50px] left-[347px]",
  },
  {
    name: "Oncology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Otorhinolaryngology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Ophthalmology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Cardiovascular",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Pulmonology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Renal Medicine",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Gastroenterology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Urology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Dermatology",
    icon: "/icons/vector-3.svg",
  },
  {
    name: "Gynaecology",
    icon: "/icons/vector-3.svg",
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col gap-16 py-16">
      <header className="flex flex-col gap-2 items-center">
        <p className="font-caption font-[number:var(--caption-font-weight)] text-app-secondary text-[length:var(--caption-font-size)] text-center tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
          ALWAYS CARING
        </p>
        <h2 className="font-display-2 font-[number:var(--display-2-font-weight)] text-app-primary text-[length:var(--display-2-font-size)] text-center tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] [font-style:var(--display-2-font-style)]">
          Our Specialties
        </h2>
      </header>

      <div className="relative h-[516px] max-w-[992px] mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {specialties.map((specialty, index) => (
            <div
              key={`specialty-${index}`}
              className="
        group
        flex
        items-center
        justify-center
        w-full
        h-[170px]
        bg-transparent
        border
        border-gray-200
        hover:bg-app-primary
        hover:rounded-[10px]
        p-5
      "
            >
              <CardContent className="p-0 flex flex-col gap-3 items-center justify-center">
                <img
                  className="w-[50px] h-[50px] object-contain"
                  alt={`${specialty.name} icon`}
                  src={specialty.icon}
                />
                <p className="font-normal text-base text-center whitespace-nowrap transition-colors duration-300 group-hover:text-app-accent">
                  {specialty.name}
                </p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
