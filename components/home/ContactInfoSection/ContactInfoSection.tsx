import Image from "next/image";
import { Card, CardContent } from "../../ui/card";

const contactCards = [
  {
    bgColor: "bg-app-accent",
    textColor: "text-app-primary",
    icon: "/icons/phone.svg",
    title: "EMERGENCY",
    line1: "(237) 681-812-255",
    line2: "(237) 666-331-894",
    isLink: true,
  },
  {
    bgColor: "bg-app-primary",
    textColor: "text-app-accent",
    icon: "/icons/location.svg",
    title: "LOCATION",
    line1: "0123 Some place",
    line2: "9876 Some country",
    isLink: false,
  },
  {
    bgColor: "bg-app-accent",
    textColor: "text-app-primary",
    icon: "/icons/email.svg",
    title: "EMAIL",
    line1: "fildineeesoe@gmil.com",
    line2: "myebstudios@gmail.com",
    isLink: false,
    smallText: true,
  },
  {
    bgColor: "bg-app-accent",
    textColor: "text-app-primary",
    icon: "/icons/clock.svg",
    title: "WORKING HOURS",
    line1: "Mon-Sat 09:00-20:00",
    line2: "Sunday Emergency only",
    isLink: false,
  },
];

export const ContactInfoSection = () => {
  return (
    <section className="relative w-full py-12">
      <div className="flex flex-col items-center mb-12">
        <h3 className="font-caption font-[number:var(--caption-font-weight)] text-app-secondary text-[length:var(--caption-font-size)] text-center tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)] mb-2">
          GET IN TOUCH
        </h3>
        <h2 className="font-display-2 text-app-primary text-[length:var(--display-2-font-size)] text-center leading-[var(--display-2-line-height)] font-[number:var(--display-2-font-weight)] tracking-[var(--display-2-letter-spacing)] [font-style:var(--display-2-font-style)]">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {contactCards.map((card) => (
          <Card
            key={card.title}
            className={`${card.bgColor} rounded-[5px] border-0`}
          >
            <CardContent className="p-6 flex flex-col h-full">
              <Image className="mb-6 h-8 w-8" alt={card.title} src={card.icon} width={32} height={32} />
              <div className="flex flex-col gap-2">
                <h4 className={`mb-2 text-lg font-bold ${card.textColor}`}>
                  {card.title}
                </h4>
                {card.isLink ? (
                  <>
                    <a
                      className={`font-body font-[number:var(--body-font-weight)] ${card.textColor} text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]`}
                      href={`tel:${card.line1}`}
                      rel="noopener noreferrer"
                    >
                      {card.line1}
                    </a>
                    <a
                      className={`font-body font-[number:var(--body-font-weight)] ${card.textColor} text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]`}
                      href={`tel:${card.line2}`}
                      rel="noopener noreferrer"
                    >
                      {card.line2}
                    </a>
                  </>
                ) : (
                  <>
                    <div
                      className={`font-body font-[number:var(--body-font-weight)] ${card.textColor} text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]`}
                    >
                      {card.line1}
                    </div>
                    {card.smallText ? (
                      <div
                        className={`font-small font-[number:var(--small-font-weight)] ${card.textColor} text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]`}
                      >
                        {card.line2}
                      </div>
                    ) : (
                      <div
                        className={`font-body font-[number:var(--body-font-weight)] ${card.textColor} text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]`}
                      >
                        {card.line2}
                      </div>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
