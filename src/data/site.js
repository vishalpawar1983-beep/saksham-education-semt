// Central brand + contact configuration for Saksham Education (SEMT)
export const site = {
  name: 'Saksham Education',
  shortName: 'SEMT',
  fullName: 'Saksham Education (SEMT)',
  tagline: 'Career Focused Skill Development Institute',
  url: 'https://www.semt.in',
  domain: 'www.semt.in',
  email: 'infosemt@gmail.com',
  formEmail: 'infosemt@gmail.com', // destination for all form submissions
  phone: '+91 78377 44540',
  phoneRaw: '+917837744540',
  whatsapp: '917837744540',
  address: {
    line1: 'SCO-24, Top Floor, Phase-1',
    line2: 'SAS Nagar Mohali',
    state: 'Punjab',
    pin: '160055',
    full: 'SEMT, SCO-24, Top Floor, Phase-1, SAS Nagar Mohali, Punjab – 160055',
    mapQuery: 'SAS Nagar Mohali Phase 1 Punjab 160055',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
  },
  stats: {
    experience: 16,
    programs: 100,
    students: 5000,
    faculty: 50,
    satisfaction: 95,
    successRate: 95,
  },
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default site;
