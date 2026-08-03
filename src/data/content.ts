export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  highlights?: string[];
  asset: string;
  linkedin?: string;
  featured?: boolean;
};

/** Only named people from FORMX.pdf / founder comments */
export const leadership: TeamMember[] = [
  {
    name: "Hiren J. Shah",
    role: "Founder & Managing Partner",
    bio: "Founder & Managing Partner of FORMX Consultants LLP. Structural Engineer — Grade 1 (AMC / BMC). Leading structural design focused on industrial, commercial and building projects — architecture planning and site execution.",
    asset: "team/hiren-j-shah.jpg",
    linkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    featured: true,
  },
];

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorLinkedin?: string;
  asset: string;
  body: string[];
};

/** No placeholder articles — publish when content is approved */
export const blogs: BlogPost[] = [];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  asset: string;
};

/** No placeholder news — publish when content is approved */
export const news: NewsItem[] = [];

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}
