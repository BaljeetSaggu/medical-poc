"use client";
import Image from "next/image";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { JSX, useState } from "react";
import { CalendarDays, User, MessageCircle, Heart, Search } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import Pagination from "components/home/PaginationSection/paginationSection";


const recentPosts = [
  {
    image: "/images/recent-post-1.png",
    date: "Monday 05, September 2021",
    title: "This Article’s Title Goes Here, but not too long.",
  },
  {
    image: "/images/recent-post-2.png",
    date: "Monday 05, September 2021",
    title: "This Article’s Title Goes Here, but not too long.",
  },
  {
    image: "/images/recent-post-3.png",
    date: "Monday 05, September 2021",
    title: "This Article’s Title Goes Here, but not too long.",
  },
  {
    image: "/images/recent-post-4.png",
    date: "Monday 05, September 2021",
    title: "This Article’s Title Goes Here, but not too long.",
  },
  {
    image: "/images/recent-post-5.png",
    date: "Monday 05, September 2021",
    title: "This Article’s Title Goes Here, but not too long.",
  },
  {
    image: "/images/recent-post-6.png",
    date: "Monday 05, September 2021",
    title: "This Article’s Title Goes Here, but not too long.",
  },
];

const blogPosts = [
  {
    image: "/images/blog-1.jpg",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  },
  {
    image: "/images/recent-post-2.png",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  },
  {
    image: "/images/recent-post-5.png",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  },
  {
    image: "/images/recent-post-1.png",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  },
  {
    image: "/images/recent-post-4.png",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  },
  {
    image: "/images/recent-post-6.png",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  },
];

export default function News(): JSX.Element {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section  className="relative h-[300px] w-full overflow-hidden sm:h-[220px]">
        <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
        <Image src="/images/blog.png" alt="Our doctors" fill className="object-cover" />

        <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />

        <div className="absolute inset-0 flex gap-[542px] overflow-hidden">
          <div className="mt-[-599px] ml-[-387px] bg-app-secondary opacity-30 w-[734px] h-[734px] rounded-full" />
          <div className="mt-[199px] bg-app-accent opacity-50 w-[734px] h-[734px] rounded-full" />
        </div>

        <div className="absolute top-[50px] left-[186px] flex flex-col gap-2 max-w-[523px]">
          <p className="font-caption font-bold text-app-secondary text-lg tracking-[2.88px] leading-normal whitespace-nowrap">
            Home/News
          </p>

          <h1 className="font-display-2 font-normal text-app-primary text-5xl tracking-normal leading-normal mt-2">
            Blog Posts
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Blog List */}
          <div className="lg:col-span-2 space-y-10">

            {currentPosts.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt="Blog"
                  width={900}
                  height={500}
                  className="w-full object-cover"
                />

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      By Author
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} />
                      68
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={16} />
                      86
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">

            {/* Search */}
            <div className="h-[50px] bg-[#1F2B6C] rounded-md px-5 flex items-center justify-between">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder:text-gray-300 focus:outline-none w-full"
              />
              <Search size={20} className="text-gray-300" />
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Recent Posts
              </h3>

              <div className="space-y-4">
                {recentPosts.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <Image
                      src={item.image}
                      alt="thumb"
                      width={70}
                      height={70}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="text-xs text-gray-500">{item.date}</p>
                      <p className="text-sm font-medium text-gray-700">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Categories
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Surgery</span>
                  <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full">
                    3
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Health Care</span>
                  <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full">
                    5
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Medical</span>
                  <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full">
                    2
                  </span>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </main>

      <ContactInfoSection />
      <FooterSection />
    </div>
  );
}