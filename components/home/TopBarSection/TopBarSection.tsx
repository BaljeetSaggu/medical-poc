import { Clock3, MapPin, PhoneCall } from "lucide-react";
import { JSX } from "react";
import Link from "next/link";

const infoItems = [
  {
    icon: PhoneCall,
    title: "EMERGENCY",
    description: "(237) 681-812-255",
  },
  {
    icon: Clock3,
    title: "WORK HOUR",
    description: "09:00 - 20:00 Everyday",
  },
  {
    icon: MapPin,
    title: "LOCATION",
    description: "0123 Some Place",
  },
];

export const TopBarSection = (): JSX.Element => {
  return (
    <section className="w-full border-t-4 border-[#d4d4d4] bg-[#f5f6f8]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row">
        <Link
          href="/"
          aria-label="Meddical Home"
          className="font-display-2 text-5xl leading-none text-[#1f2b6c]"
        >
          MED<span className="text-app-secondary">DICAL</span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end md:gap-8">
        {infoItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1f2b6c] text-[#1f2b6c]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="relative opacity-100 md:h-[42] md:w-[185] md:leading-tight">
                <p className="font-body text-xs font-semibold tracking-[0.08em] text-app-primary sm:text-sm">
                  {item.title}
                </p>
                <p className="font-body text-sm font-semibold text-app-secondary sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
