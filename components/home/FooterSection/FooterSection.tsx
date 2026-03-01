import Link from "next/link";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import { JSX } from "react";

const importantLinks = [
  { label: "Appointment", href: "/appointment" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contactInfo = [
  { label: "Call: (237) 681-812-255" },
  { label: "Email: hello@meddical.com" },
  { label: "Address: 0123 Some place" },
  { label: "Some country" },
];

const socialIcons = [
  { src: "/icons/in-light.svg", alt: "Social media icon 1" },
  { src: "/icons/facebook-light.svg", alt: "Social media icon 2" },
  { src: "/icons/insta-light.svg", alt: "Social media icon 3" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-app-primary px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link
              className="[font-family:'Yeseva_One',Helvetica] whitespace-nowrap text-4xl font-normal tracking-[0] leading-[normal] text-app-accent"
              href="/"
            >
              MEDDICAL
            </Link>
            <p className="font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] text-white [font-style:var(--body-2-font-style)]">
              Leading the Way in Medical
              <br />
              Excellence, Trusted Care.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Work_Sans',Helvetica] text-lg font-semibold tracking-[0] leading-[normal] text-white">
              Important Links
            </h3>
            <nav className="flex flex-col gap-3">
              {importantLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-[length:var(--body-font-size)] font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] text-white transition-colors hover:text-app-accent [font-style:var(--body-font-style)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Work_Sans',Helvetica] text-lg font-semibold tracking-[0] leading-[normal] text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <p
                  key={info.label}
                  className="font-body text-[length:var(--body-font-size)] font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] text-white [font-style:var(--body-font-style)]"
                >
                  {info.label}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Work_Sans',Helvetica] text-lg font-semibold tracking-[0] leading-[normal] text-white">
              Newsletter
            </h3>
            <div className="relative flex items-center">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="rounded-[5px] border-0 bg-app-accent pr-12 font-body text-[length:var(--body-font-size)] font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] text-app-primary placeholder:text-app-primary [font-style:var(--body-font-style)]"
              />
              <Button
                size="icon"
                className="absolute right-2 h-auto bg-transparent p-0 hover:bg-transparent"
              >
                <img className="h-6 w-6" alt="Submit" src="/icons/send.svg" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="[font-family:'Work_Sans',Helvetica] text-base font-normal tracking-[0] leading-[normal] text-white">
            Copyright 2021 Hospital&apos;s name. All Rights Reserved by PNTEC-LTD
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <a key={icon.alt} href="#" className="transition-opacity hover:opacity-80">
                <img className="h-6 w-6" alt={icon.alt} src={icon.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
