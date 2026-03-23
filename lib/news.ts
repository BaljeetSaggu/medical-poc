export type NewsPost = {
  slug: string;
  image: string;
  date: string;
  title: string;
  description: string;
  category: string;
  content: string[];
  views: number;
  likes: number;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "a-passion-for-putting-patients-first",
    image: "/images/blog-1.jpg",
    date: "Monday 05, September 2021",
    title: "A passion for putting patients first",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    category: "Medical",
    views: 68,
    likes: 86,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
      "Consequat faucibus porttitor enim et. Nulla urna, aliquet eget in mauris, non ultrices. Sed diam velit purus, vitae viverra ipsum quis. Amet, in orci, sem turpis dui.",
      "Aliquam erat volutpat. Maecenas luctus, augue et congue tincidunt, nibh risus gravida urna, vitae bibendum sem sem ac eros. Cras facilisis suscipit sem, et tristique lorem.",
    ],
  },
  {
    slug: "how-to-make-your-care-experience-clearer",
    image: "/images/recent-post-2.png",
    date: "Monday 05, September 2021",
    title: "How to make your care experience clearer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    category: "Health Care",
    views: 54,
    likes: 61,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
      "Consequat faucibus porttitor enim et. Nulla urna, aliquet eget in mauris, non ultrices. Sed diam velit purus, vitae viverra ipsum quis. Amet, in orci, sem turpis dui.",
      "Aliquam erat volutpat. Maecenas luctus, augue et congue tincidunt, nibh risus gravida urna, vitae bibendum sem sem ac eros. Cras facilisis suscipit sem, et tristique lorem.",
    ],
  },
  {
    slug: "small-habits-that-support-better-recovery",
    image: "/images/recent-post-5.png",
    date: "Monday 05, September 2021",
    title: "Small habits that support better recovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    category: "Health Care",
    views: 43,
    likes: 52,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
      "Consequat faucibus porttitor enim et. Nulla urna, aliquet eget in mauris, non ultrices. Sed diam velit purus, vitae viverra ipsum quis. Amet, in orci, sem turpis dui.",
      "Aliquam erat volutpat. Maecenas luctus, augue et congue tincidunt, nibh risus gravida urna, vitae bibendum sem sem ac eros. Cras facilisis suscipit sem, et tristique lorem.",
    ],
  },
  {
    slug: "what-patients-should-know-before-a-visit",
    image: "/images/recent-post-1.png",
    date: "Monday 05, September 2021",
    title: "What patients should know before a visit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    category: "Medical",
    views: 38,
    likes: 44,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
      "Consequat faucibus porttitor enim et. Nulla urna, aliquet eget in mauris, non ultrices. Sed diam velit purus, vitae viverra ipsum quis. Amet, in orci, sem turpis dui.",
      "Aliquam erat volutpat. Maecenas luctus, augue et congue tincidunt, nibh risus gravida urna, vitae bibendum sem sem ac eros. Cras facilisis suscipit sem, et tristique lorem.",
    ],
  },
  {
    slug: "why-preventive-checkups-still-matter",
    image: "/images/recent-post-4.png",
    date: "Monday 05, September 2021",
    title: "Why preventive checkups still matter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    category: "Surgery",
    views: 49,
    likes: 57,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
      "Consequat faucibus porttitor enim et. Nulla urna, aliquet eget in mauris, non ultrices. Sed diam velit purus, vitae viverra ipsum quis. Amet, in orci, sem turpis dui.",
      "Aliquam erat volutpat. Maecenas luctus, augue et congue tincidunt, nibh risus gravida urna, vitae bibendum sem sem ac eros. Cras facilisis suscipit sem, et tristique lorem.",
    ],
  },
  {
    slug: "supporting-families-through-treatment-journeys",
    image: "/images/recent-post-6.png",
    date: "Monday 05, September 2021",
    title: "Supporting families through treatment journeys",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    category: "Medical",
    views: 73,
    likes: 93,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
      "Consequat faucibus porttitor enim et. Nulla urna, aliquet eget in mauris, non ultrices. Sed diam velit purus, vitae viverra ipsum quis. Amet, in orci, sem turpis dui.",
      "Aliquam erat volutpat. Maecenas luctus, augue et congue tincidunt, nibh risus gravida urna, vitae bibendum sem sem ac eros. Cras facilisis suscipit sem, et tristique lorem.",
    ],
  },
];

export const getNewsPostBySlug = (slug: string) =>
  newsPosts.find((post) => post.slug === slug);
