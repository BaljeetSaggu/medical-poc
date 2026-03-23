import { Clock3, MapPin, PhoneCall } from "lucide-react";
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

export const TopBarSection = () => {
  return (
    <section className="w-full border-t-4 border-[#d4d4d4] bg-[#f5f6f8]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 lg:flex-row">
        <Link
          href="/"
          aria-label="Meddical Home"
          className="font-display-2 text-4xl leading-none text-[#1f2b6c] sm:text-5xl"
        >
          MED<span className="text-app-secondary">DICAL</span>
        </Link>

        <div className="grid w-full gap-4 sm:grid-cols-3 lg:w-auto lg:gap-6">
          {infoItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center justify-center gap-3 lg:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#1f2b6c] text-[#1f2b6c]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="leading-tight">
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
