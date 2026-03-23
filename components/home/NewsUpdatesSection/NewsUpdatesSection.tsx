import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";

const newsArticles = [
  {
    image: "/images/news.png",
    title: "This Article's Title goes Here,\nbut not too long.",
    date: "Monday 05, September 2021 | By Author",
    views: 68,
    likes: 86,
  },
  {
    image: "/images/news.png",
    title: "This Article's Title goes Here,\nbut not too long.",
    date: "Monday 05, September 2021 | By Author",
    views: 68,
    likes: 86,
  },
  {
    image: "/images/news.png",
    title: "This Article's Title goes Here,\nbut not too long.",
    date: "Monday 05, September 2021 | By Author",
    views: 68,
    likes: 86,
  },
  {
    image: "/images/news.png",
    title: "This Article's Title goes Here,\nbut not too long.",
    date: "Monday 05, September 2021 | By Author",
    views: 68,
    likes: 86,
  },
];

const paginationDots = [
  { active: false, className: "bg-app-accent" },
  { active: true, className: "bg-app-primary" },
  { active: false, className: "bg-app-accent" },
];

export const NewsUpdatesSection = () => {
  return (
    <section className="relative w-full py-16 bg-[#fafdfe]">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <p className="font-caption font-[number:var(--caption-font-weight)] text-app-secondary text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)] mb-4">
            BETTER INFORMATION, BETTER HEALTH
          </p>
          <h2 className="font-display-2 font-[number:var(--display-2-font-weight)] text-app-primary text-[length:var(--display-2-font-size)] tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] [font-style:var(--display-2-font-style)]">
            News
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {newsArticles.map((article, index) => (
            <Card
              key={index}
              className="bg-white rounded-[5px] shadow-[0px_0px_20px_#0000000d] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-0 flex h-full">
                <div className="w-[33%] flex-shrink-0">
                  <Image
                    className="h-full w-full object-cover"
                    alt="Article thumbnail"
                    src={article.image}
                    width={280}
                    height={240}
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="font-small font-[number:var(--small-font-weight)] text-app-secondary text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)] mb-3">
                      {article.date}
                    </p>
                    <h3 className="mb-4 font-body-2 text-black text-[length:var(--body-2-font-size)] leading-[var(--body-2-line-height)]">
                      <Link href="/about" className="hover:text-app-secondary">
                        {article.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </Link>
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Image
                        className="h-3 w-4"
                        alt="Views"
                        src="/icons/eyes.svg"
                        width={16}
                        height={12}
                      />
                      <span className="font-small font-[number:var(--small-font-weight)] text-black text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                        {article.views}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        className="h-4 w-4"
                        alt="likes"
                        src="/icons/like.svg"
                        width={16}
                        height={16}
                      />
                      <span className="font-small font-[number:var(--small-font-weight)] text-black text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                        {article.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          {paginationDots.map((dot, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${dot.className}`}
              aria-label={`Go to page ${index + 1}`}
              aria-current={dot.active ? "page" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
