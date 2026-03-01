import { Button } from "../../ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />

      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Physician trends"
        src="/images/physician-trends-2021-merritt-hawkins-1.png"
      />

      <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />

      <div className="absolute inset-0 flex gap-[542px] overflow-hidden">
        <div className="mt-[-599px] ml-[-387px] bg-app-secondary opacity-30 w-[734px] h-[734px] rounded-full" />
        <div className="mt-[199px] bg-app-accent opacity-50 w-[734px] h-[734px] rounded-full" />
      </div>

      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Physician trends"
        src="/images/physician-trends-2021-merritt-hawkins-2.png"
      />

      <div className="absolute top-[167px] left-[186px] flex flex-col gap-2 max-w-[523px]">
        <p className="font-caption font-bold text-app-secondary text-lg tracking-[2.88px] leading-normal whitespace-nowrap">
          CARING FOR LIFE
        </p>

        <h1 className="font-display-2 font-normal text-app-primary text-5xl tracking-normal leading-normal mt-2">
          Leading the Way
          <br />
          in Medical Excellence
        </h1>

        <Button className="w-fit mt-8 px-[35px] py-[13px] bg-app-accent hover:bg-app-accent/90 text-app-primary font-button-text font-medium text-base rounded-[50px]">
          Our Services
        </Button>
      </div>
    </section>
  );
};
