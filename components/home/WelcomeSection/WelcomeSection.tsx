import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";

export const WelcomeSection = () => {
  return (
    <section className="flex w-full flex-col items-center px-4 py-14">
      <div className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="font-caption text-app-secondary text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)]">
            WELCOME TO MEDDICAL
          </p>

          <h2 className="max-w-[14ch] font-display-2 text-app-primary text-[length:var(--display-2-font-size)] leading-[1.2]">
            A Great Place to Receive Care
          </h2>
        </div>

        <p className="mt-4 max-w-[62ch] font-body text-[length:var(--body-font-size)] leading-7 text-black/80">
          Meddical combines compassionate clinicians, accessible specialty care, and thoughtfully designed spaces to help patients and families feel informed, supported, and confident at every step.
        </p>

        <Button asChild variant="link" className="mt-4 h-auto p-0 font-body text-app-secondary">
          <Link href="/about" className="inline-flex items-center gap-2.5">
            Learn More
            <ArrowRightIcon className="h-3 w-3" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
