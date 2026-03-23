import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eaf6ff_0%,#f9fcff_50%,#dceaf8_100%)] px-4 py-14 sm:py-20">
      <div className="absolute left-[-8rem] top-[-8rem] h-64 w-64 rounded-full bg-app-secondary/10 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-5rem] h-72 w-72 rounded-full bg-app-accent/70 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl animate-fade-up [--animation-delay:100ms]">
          <p className="font-caption text-base font-bold tracking-[2.88px] text-app-secondary">
          CARING FOR LIFE
        </p>

          <h1 className="mt-4 font-display-2 text-4xl leading-tight text-app-primary sm:text-5xl lg:text-6xl">
            Leading the way in medical excellence.
          </h1>
          <p className="mt-5 max-w-lg font-body text-base leading-7 text-black/80 sm:text-lg">
            Experienced clinicians, modern facilities, and patient-first care for every stage of your health journey.
          </p>

          <Button
            asChild
            className="mt-8 w-fit rounded-full bg-app-accent px-8 py-6 text-base font-medium text-app-primary hover:bg-app-accent/90"
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] animate-fade-up [--animation-delay:250ms]">
          <div className="absolute inset-x-10 bottom-4 top-12 rounded-[2rem] bg-app-primary/8" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 p-3 shadow-[0_24px_80px_rgba(31,43,108,0.15)] backdrop-blur-sm">
            <Image
              src="/images/physician-trends-2021-merritt-hawkins-2.png"
              alt="Doctor smiling in a clinical environment"
              width={900}
              height={860}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
