import Image from "next/image";
import { Card, CardContent } from "../../ui/card";
import { AppointmentBookingSection } from "../AppointmentBookingSection";

export const SpecialtiesSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-20">
      <Image
        src="/images/book-apointment.png"
        alt="Medical background"
        fill
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white opacity-80" />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 max-w-md">
            <h2 className="font-display-2 text-app-secondary text-[length:var(--display-2-font-size)] leading-[var(--display-2-line-height)] font-[number:var(--display-2-font-weight)] tracking-[var(--display-2-letter-spacing)] [font-style:var(--display-2-font-style)]">
              Book an Appointment
            </h2>

            <p className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>

          <Card className="bg-app-primary border-none shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                <AppointmentBookingSection />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
