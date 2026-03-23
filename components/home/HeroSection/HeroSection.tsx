import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f8fbff]" />
      <Image
        src="/images/physician-trends-2021-merritt-hawkins-1.png"
        alt="Hospital background"
        fill
        priority
        className="object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,255,0.94)_0%,rgba(248,251,255,0.78)_36%,rgba(248,251,255,0.2)_100%)]" />
      <div className="absolute left-[-4rem] top-6 h-36 w-36 rounded-full bg-app-secondary/20" />
      <div className="absolute bottom-[-4rem] right-8 h-48 w-48 rounded-full bg-app-accent/35" />

      <div className="relative mx-auto grid min-h-[360px] w-full max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-md animate-fade-up [--animation-delay:100ms]">
          <p className="font-caption text-xs font-bold tracking-[2.88px] text-app-secondary">
            CARING FOR LIFE
          </p>

          <h1 className="mt-3 font-display-2 text-4xl leading-[1.05] text-app-primary sm:text-5xl">
            Leading the Way
            <br />
            in Medical Excellence
          </h1>

          <Button
            asChild
            className="mt-6 h-auto rounded-full bg-app-accent px-6 py-3 text-sm font-medium text-app-primary hover:bg-app-accent/90"
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </div>

        {/* <div className="relative hidden h-full min-h-[300px] lg:block">
          <Image
            src="/images/physician-trends-2021-merritt-hawkins-2.png"
            alt="Doctor smiling in a clinical environment"
            width={640}
            height={620}
            priority
            className="absolute bottom-0 right-0 h-auto max-h-[360px] w-auto object-contain"
          />
        </div> */}
      </div>
    </section>
  );
};
