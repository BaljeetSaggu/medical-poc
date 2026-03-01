import { JSX } from "react";
import { Button } from "../../ui/button";

const callToActionButtons = [
  {
    bgColor: "bg-app-primary",
    textColor: "text-white",
    text: "Book an Appointment",
    icon: "/icons/39Calendar.svg",
    iconAlt: "Element calendar",
    iconWidth: "w-[52px]",
    iconHeight: "h-[52px]",
    marginLeft: "",
  },
  {
    bgColor: "bg-app-accent",
    textColor: "text-app-primary",
    text: "Book an Appointment",
    icon: "/icons/27Team.svg",
    iconAlt: "Element team",
    iconWidth: "w-[52px]",
    iconHeight: "h-[44.24px]",
    marginLeft: "ml-5",
  },
  {
    bgColor: "bg-app-secondary",
    textColor: "text-white",
    text: "Book an Appointment",
    icon: "/icons/15Cash.svg",
    iconAlt: "Element cash",
    iconWidth: "w-[52px]",
    iconHeight: "h-[38.46px]",
    marginLeft: "ml-[21px]",
  },
];

export const HeroCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex justify-center gap-5">
      {callToActionButtons.map((button, index) => (
        <Button
          key={index}
          className={`${button.bgColor} ${button.marginLeft} inline-flex w-[317px] h-[100px] items-center justify-center gap-14 px-5 py-[25px] rounded-[5px] hover:opacity-90 transition-opacity`}
        >
          <span
            className={`${button.textColor} font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]`}
          >
            {button.text}
          </span>
          <img
            className={`${button.iconWidth} ${button.iconHeight}`}
            alt={button.iconAlt}
            src={button.icon}
          />
        </Button>
      ))}
    </section>
  );
};
