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
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-3 lg:flex-row">
        <Link
          href="/"
          aria-label="Meddical Home"
          className="font-display-2 text-3xl leading-none text-[#1f2b6c] sm:text-4xl"
        >
          MED<span className="text-app-secondary">DICAL</span>
        </Link>

        <div className="grid w-full gap-4 sm:grid-cols-3 lg:w-auto lg:gap-6">
          {infoItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center justify-center gap-3 lg:justify-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1f2b6c] text-[#1f2b6c]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="font-body text-[10px] font-semibold tracking-[0.08em] text-app-primary sm:text-xs">
                    {item.title}
                  </p>
                  <p className="font-body text-xs font-semibold text-app-secondary sm:text-sm">
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
