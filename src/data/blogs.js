import { slugify } from './courses';

const rawBlogs = [
  {
    title: 'How to Choose the Right Career-Focused Diploma in 2026',
    category: 'Career Guidance',
    author: 'SEMT Editorial',
    date: '2026-05-28',
    readTime: '6 min read',
    excerpt:
      'With hundreds of programs available, picking the right diploma can be overwhelming. Here is a practical framework to align your interests, market demand and budget.',
    tags: ['Careers', 'Diploma', 'Skills'],
  },
  {
    title: 'Top 7 IT Skills Employers Are Hiring For Right Now',
    category: 'Information Technology',
    author: 'Rajesh Verma',
    date: '2026-05-15',
    readTime: '5 min read',
    excerpt:
      'The IT job market keeps evolving. We break down the most in-demand technical skills and the SEMT courses that help you master them.',
    tags: ['IT', 'Jobs', 'Upskilling'],
  },
  {
    title: 'A Day in the Life of a Nursery Teacher Training Student',
    category: 'Teacher Training',
    author: 'Neha Gupta',
    date: '2026-04-30',
    readTime: '4 min read',
    excerpt:
      'Curious about the NTT program? Follow a typical day filled with child psychology, lesson planning and hands-on classroom practice.',
    tags: ['Teaching', 'NTT', 'Education'],
  },
  {
    title: 'Why Practical Training Beats Theory for Skill Development',
    category: 'Skill Development',
    author: 'SEMT Editorial',
    date: '2026-04-18',
    readTime: '5 min read',
    excerpt:
      'Employability comes from doing, not just knowing. Learn how SEMT’s lab-first approach prepares students for real workplaces.',
    tags: ['Skills', 'Training', 'Employability'],
  },
  {
    title: 'Building a Career in Fashion Designing After 12th',
    category: 'Fashion Designing',
    author: 'Simran Kaur',
    date: '2026-03-29',
    readTime: '7 min read',
    excerpt:
      'From your first sketch to your own label — a roadmap for students who want to turn creativity into a thriving fashion career.',
    tags: ['Fashion', 'Design', 'Careers'],
  },
  {
    title: 'Hotel Management: Scope, Roles and Salary in India',
    category: 'Hotel Management',
    author: 'Pooja Mehta',
    date: '2026-03-12',
    readTime: '6 min read',
    excerpt:
      'Hospitality is booming. Explore the career paths, growth potential and skills you need to thrive in hotel management.',
    tags: ['Hospitality', 'Careers', 'Hotel'],
  },
];

export const blogs = rawBlogs.map((b, i) => ({
  id: i + 1,
  ...b,
  slug: slugify(b.title),
  image: `https://picsum.photos/seed/semt-blog-${i + 1}/720/460`,
  content: [
    `${b.excerpt}`,
    'At SEMT we believe that the right guidance at the right time can completely transform a learner’s journey. In this article we explore the topic in depth and share practical, actionable insights drawn from our years of training experience.',
    'Every recommendation below is grounded in what we see working for our students every single day — from the classroom to their first job offer. Skill development is not about chasing trends; it is about building durable, transferable capabilities.',
    'If you are considering enrolling, our counsellors are always available to help you map your goals to the right program. Reach out, visit our campus in Mohali, and take the first confident step toward a future-ready career.',
  ],
}));

export const getBlogBySlug = (slug) => blogs.find((b) => b.slug === slug);
export const latestBlogs = blogs.slice(0, 3);

export default blogs;
