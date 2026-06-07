import { courses } from './courses';

const find = (t) => courses.find((c) => c.title === t);
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&q=80`;

// Each hero slide maps to a real SEMT course with a title-relevant image.
const raw = [
  {
    heading: '3D Animation',
    courseTitle: '3D Animation',
    badge: 'Multimedia & Animation',
    description:
      'Master cinematic 3D animation, modeling, rigging, lighting and rendering — build a studio-ready showreel and launch your creative career.',
    image: u('1593720219276-0b1eacd0aef4'),
  },
  {
    heading: 'Web Designing',
    courseTitle: 'Web Designing',
    badge: 'Web & Development',
    description:
      'Design and build stunning, responsive websites with modern tools, HTML, CSS and real UI principles that employers are hiring for.',
    image: u('1633356122544-f134324a6cee'),
  },
  {
    heading: 'Fashion Designing',
    courseTitle: 'Diploma in Fashion Designing',
    badge: 'Fashion & Textile',
    description:
      'Turn your creativity into a career — learn sketching, garment construction, draping and styling from experienced industry mentors.',
    image: u('1558769132-cb1aea458c5e'),
  },
  {
    heading: 'Hotel Management',
    courseTitle: 'Diploma in Hotel Management',
    badge: 'Hospitality & Tourism',
    description:
      'Step into the booming hospitality industry with hands-on training in front office, food & beverage and guest relations.',
    image: u('1566073771259-6a8506099945'),
  },
  {
    heading: 'Hardware & Networking',
    courseTitle: 'Diploma in Computer Hardware & Networking',
    badge: 'IT Infrastructure',
    description:
      'Become a certified network engineer — master assembling, troubleshooting, servers and enterprise-grade networking.',
    image: u('1558494949-ef010cbdcc31'),
  },
  {
    heading: 'Teacher Training',
    courseTitle: 'Diploma in Nursery Teacher Training',
    badge: 'Education & Teaching',
    description:
      'Start a rewarding teaching career with practical training in child psychology, lesson planning and classroom management.',
    image: u('1503676260728-1c00da094a0b'),
  },
];

export const heroSlides = raw.map((s, i) => {
  const c = find(s.courseTitle);
  return {
    id: i + 1,
    ...s,
    subtitle: 'Career Program in Mohali',
    path: c ? `/courses/${c.slug}` : '/courses',
  };
});

export const heroStats = [
  { value: '5000+', label: 'Students Trained' },
  { value: '50+', label: 'Hiring Partners' },
  { value: '95%', label: 'Placement Rate' },
];

export default heroSlides;
