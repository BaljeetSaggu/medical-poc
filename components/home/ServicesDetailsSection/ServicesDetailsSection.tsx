import { JSX } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const serviceItems = [
  {
    icon: "/icons/medical-1.svg",
    label: "Free Checkup",
    isActive: false,
  },
  {
    icon: "/icons/cardiogram.svg",
    label: "Cardiogram",
    isActive: true,
  },
  {
    icon: "/icons/dna-testing.svg",
    label: "Dna Testing",
    isActive: false,
  },
  {
    icon: "/icons/blood-bank.svg",
    label: "Blood Bank",
    isActive: false,
  },
];

const bulletPoints = [
  { text: "A Passion for Healing", column: 1 },
  { text: "5-Star Care", column: 2 },
  { text: "All our best", column: 1 },
  { text: "Believe in Us", column: 2 },
  { text: "A Legacy of Excellence", column: 1 },
  { text: "Always Caring", column: 2 },
];

export const ServicesDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 bg-[#149eec03]">
      <div className="container mx-auto px-4">
        <header className="flex flex-col items-center gap-2 mb-16">
          <p className="font-caption font-[number:var(--caption-font-weight)] text-app-secondary text-[length:var(--caption-font-size)] text-center tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
            CARE YOU CAN BELIEVE IN
          </p>
          <h2 className="font-display-2 font-[number:var(--display-2-font-weight)] text-app-primary text-[length:var(--display-2-font-size)] text-center tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] [font-style:var(--display-2-font-style)]">
            Our Services
          </h2>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <aside className="w-full lg:w-[157px] flex-shrink-0">
            <Card className="relative overflow-hidden border-[#1f2b6c] bg-white/20">
              <CardContent className="p-0">
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center gap-2 py-6 px-6 ${
                      item.isActive ? "bg-app-primary" : ""
                    }`}
                  >
                    <img
                      className="w-8 h-8 object-contain"
                      alt={item.label}
                      src={item.icon}
                    />
                    <span
                      className={`font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] ${
                        item.isActive ? "text-app-accent" : "text-black"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
                <div className="bg-app-primary py-3 flex justify-center">
                  <Button
                    variant="ghost"
                    className="font-button-text font-[number:var(--button-text-font-weight)] text-[length:var(--button-text-font-size)] leading-[var(--button-text-line-height)] text-app-accent tracking-[var(--button-text-letter-spacing)] [font-style:var(--button-text-font-style)] hover:bg-transparent hover:text-app-accent"
                  >
                    View All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          <main className="flex-1 flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="font-title font-[number:var(--title-font-weight)] text-[#000000] text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)] mb-6">
                A passion for putting patients first.
              </h3>

              <div className="grid grid-cols-2 gap-x-16 gap-y-4 mb-8">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-1 w-4 h-4 bg-app-secondary rounded-full flex-shrink-0" />
                    <span className="font-body-2 font-[number:var(--body-2-font-weight)] text-[#000000] text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-[324px] flex-shrink-0">
              <img
                className="w-full h-auto object-cover rounded"
                alt="Medical professionals"
                src="/images/group-186.png"
              />
              <img
                className="w-full h-auto object-cover rounded"
                alt="Medical team"
                src="/images/group-187.png"
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
