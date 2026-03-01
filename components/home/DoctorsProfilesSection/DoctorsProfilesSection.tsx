import { JSX } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../ui/card";

const doctorsData = [
  {
    id: 1,
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/images/doctor-1.png",
  },
  {
    id: 2,
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/images/doctor-2.png",
  },
  {
    id: 3,
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/images/doctor-3.png",
  },
];

const paginationDots = [{ active: false }, { active: true }, { active: false }];

export const DoctorsProfilesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 px-4">
      <div className="max-w-[992px] mx-auto">
        <header className="text-center mb-12">
          <p className="font-caption font-[number:var(--caption-font-weight)] text-app-secondary text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)] mb-2">
            TRUSTED CARE
          </p>
          <h2 className="font-display-2 font-[number:var(--display-2-font-weight)] text-app-primary text-[length:var(--display-2-font-size)] tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] [font-style:var(--display-2-font-style)]">
            Our Doctors
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {doctorsData.map((doctor) => (
            <Card
              key={doctor.id}
              className="overflow-hidden border-0 shadow-none"
            >
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <img
                    className="w-full h-[350px] object-cover"
                    alt={doctor.name}
                    src={doctor.image}
                  />

                  <div className="bg-app-accent p-6 flex flex-col items-center">
                    <h3 className="font-body-2 font-[number:var(--body-2-font-weight)] text-app-primary text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)] mb-2">
                      {doctor.name}
                    </h3>

                    <p className="font-caption font-[number:var(--caption-font-weight)] text-app-primary text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)] mb-4">
                      {doctor.specialty}
                    </p>

                    <div className="flex gap-4 mb-0">
                      <img
                          
                          className="w-6 h-6"
                          alt="Social media icon"
                          src="/icons/in.svg"
                        />
                        <img
                          
                          className="w-6 h-6"
                          alt="Social media icon"
                          src="/icons/facebook.svg"
                        />
                        <img
                          
                          className="w-6 h-6"
                          alt="Social media icon"
                          src="/icons/insta.svg"
                        />
                      
                    </div>
                  </div>

                  <Button className="w-full bg-app-primary text-app-accent rounded-none rounded-b-[5px] h-[46px] font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] hover:bg-app-primary/90">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-[18px] h-[18px] rounded-[50px] ${
                dot.active ? "bg-app-primary" : "bg-app-accent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
