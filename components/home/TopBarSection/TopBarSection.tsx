import { Clock3, MapPin, PhoneCall } from "lucide-react";
import { JSX } from "react";

const infoItems = [
  {
    icon: PhoneCall,
    title: "Emergency",
    description: "(237) 681-812-255",
  },
  {
    icon: Clock3,
    title: "Work Hour",
    description: "09:00 - 20:00 Everyday",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "0123 Some Place",
  },
];

export const TopBarSection = (): JSX.Element => {
  return (
    <section className="w-full border-b-2 border-[#BFD2F8] bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-3 sm:justify-between">
        {infoItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-app-accent/40 text-app-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-app-primary sm:text-sm">
                  {item.title}
                </p>
                <p className="font-body text-xs text-app-secondary sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
