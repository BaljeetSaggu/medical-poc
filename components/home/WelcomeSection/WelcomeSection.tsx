import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { JSX } from "react";

export const WelcomeSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      <div className="max-w-[660px] w-full flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-caption font-[number:var(--caption-font-weight)] text-app-secondary text-[length:var(--caption-font-size)] text-center tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
            WELCOME TO MEDDICAL
          </h3>

          <h2 className="font-display-2 font-[number:var(--display-2-font-weight)] text-app-primary text-[length:var(--display-2-font-size)] text-center tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] [font-style:var(--display-2-font-style)]">
            A Great Place to Receive Care
          </h2>
        </div>

        <p className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>

        <Button
          variant="link"
          className="inline-flex items-center gap-2.5 mt-4 p-0 h-auto font-body font-[number:var(--body-font-weight)] text-app-secondary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]"
        >
          Learn More
          <ArrowRightIcon className="w-3 h-3" />
        </Button>
      </div>
    </section>
  );
};
