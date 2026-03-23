import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Heart, MessageCircle, Search, User } from "lucide-react";
import { ContactInfoSection } from "components/home/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "components/home/FooterSection";
import { NavigationBarSection } from "components/home/NavigationBarSection";
import { TopBarSection } from "components/home/TopBarSection";
import { getNewsPostBySlug, newsPosts } from "../../../lib/news";

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const post = getNewsPostBySlug(params.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const post = getNewsPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = newsPosts.findIndex((item) => item.slug === post.slug);
  const previousPost = currentIndex > 0 ? newsPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < newsPosts.length - 1 ? newsPosts[currentIndex + 1] : null;
  const recentPosts = newsPosts.filter((item) => item.slug !== post.slug).slice(0, 6);
  const categoryCounts = newsPosts.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white">
      <TopBarSection />
      <NavigationBarSection />

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
        <div className="absolute inset-0 bg-[#02ddcd] rotate-180" />
        <Image src="/images/blog.png" alt="Blog post banner" fill className="object-cover" />
        <div className="absolute inset-0 rotate-180 bg-[linear-gradient(259deg,rgba(229,228,232,1)_9%,rgba(235,234,239,0)_100%)]" />
        <div className="absolute inset-0 flex overflow-hidden">
          <div className="ml-[-18rem] mt-[-20rem] h-[34rem] w-[34rem] rounded-full bg-app-secondary opacity-30" />
          <div className="ml-auto mr-[-12rem] mt-[6rem] h-[26rem] w-[26rem] rounded-full bg-app-accent opacity-50" />
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4">
          <p className="font-caption text-sm tracking-[2.88px] text-app-primary">
            Home / News / Article
          </p>
          <h1 className="mt-3 font-display-2 text-4xl text-app-primary md:text-5xl">
            Blog Post
          </h1>
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <article className="overflow-hidden rounded-lg bg-white shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                width={900}
                height={500}
                className="w-full object-cover"
              />

              <div className="p-8">
                <div className="mb-4 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    By Author
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    {post.views}
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={16} />
                    {post.likes}
                  </div>
                </div>

                <h2 className="mb-6 text-3xl font-bold text-blue-900">
                  {post.title}
                </h2>

                <div className="space-y-5 leading-relaxed text-gray-700">
                  {post.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {previousPost ? (
                    <Link
                      href={`/news/${previousPost.slug}`}
                      className="inline-flex items-center gap-2 self-start rounded-full border border-blue-900 px-5 py-3 text-blue-900 transition hover:bg-blue-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous Article
                    </Link>
                  ) : null}

                  {nextPost ? (
                    <Link
                      href={`/news/${nextPost.slug}`}
                      className="inline-flex items-center gap-2 self-start rounded-full bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-700 sm:self-auto"
                    >
                      Next Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-10">
            <div className="flex h-[50px] items-center justify-between rounded-md bg-[#1F2B6C] px-5">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-white placeholder:text-gray-300 focus:outline-none"
              />
              <Search size={20} className="text-gray-300" />
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">Recent Posts</h3>

              <div className="space-y-4">
                {recentPosts.map((item) => (
                  <Link key={item.slug} href={`/news/${item.slug}`} className="flex gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="text-xs text-gray-500">{item.date}</p>
                      <p className="text-sm font-medium text-gray-700">{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">Categories</h3>

              <ul className="space-y-3 text-gray-700">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <li key={category} className="flex justify-between">
                    <span>{category}</span>
                    <span className="rounded-full bg-blue-900 px-2 py-1 text-xs text-white">
                      {count}
                    </span>
                  </li>
                ))}
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
