// ---------------------------------------------------------------------------
// SEMT course catalogue
// Hierarchical category -> course structure. Every course object is fully
// generated with overview, curriculum, eligibility, career paths and FAQs so
// the Course Detail page always has complete content.
// ---------------------------------------------------------------------------

export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const ux = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=80`;

// Relevant image per category (fallback for every course in that stream).
const categoryImageIds = {
  'Information Technology': '1517245386807-bb43f82c33c4',
  'Nursery Teacher Training': '1503676260728-1c00da094a0b',
  'Management Programs': '1542744173-8e7e53415bb0',
  'Hotel Management': '1566073771259-6a8506099945',
  'Fashion / Textile / Interior Designing': '1558769132-cb1aea458c5e',
  Multimedia: '1626785774573-4b799315345d',
  Beautician: '1487412947147-5cebf100ffc2',
  'Fire & Safety Programs': '1599045118108-bf9954418b76',
  'Nursing Teacher Training': '1576091160550-2173dba999ef',
  Yoga: '1545205597-3d9d02c29597',
  Paramedical: '1579684385127-1ef15d508118',
  'Hardware & Networking': '1558494949-ef010cbdcc31',
  'English Speaking & Communication': '1505373877841-8d25f7d46678',
  'Astrology & Vastu': '1532968961962-8a0cb3a2d4f5',
  'Mass Communication': '1495020689067-958852a7765e',
  'Library Science': '1521587760476-6c12a4b040da',
  'Electronic Mechanic': '1581092160562-40aa08e78837',
  Engineering: '1581092918056-0c4c3acd3789',
  'IT Diploma Courses': '1461749280684-dccba630e2f6',
  'IT Certificate Courses': '1555066931-4365d14bab8c',
  'Job Oriented Programmes': '1581244277943-fe4a9c777189',
};

// Title-specific overrides where a more precise image is available.
const courseImageIds = {
  '3D Animation': '1593720219276-0b1eacd0aef4',
  'Web Designing': '1633356122544-f134324a6cee',
  'Certificate in Tally Accounting': '1554224155-6726b3ff858f',
  'Diploma in Account Professional': '1554224155-6726b3ff858f',
  'Diploma in Financial Accounting': '1554224155-6726b3ff858f',
  'Diploma In Plumbing Certification (1 Year)': '1607472586893-edb57bdc0e39',
  'Cutting Tailoring Embroidery': '1556905055-8f358a7a47b2',
  'Diploma in Jewelry Designing': '1515562141207-7a88fb7ce338',
  'Diploma in Interior Designing': '1618221195710-dd6b41faaea6',
  'Diploma in Textile Designing': '1556905055-8f358a7a47b2',
  'Diploma in Mechanical Engineering': '1581092160562-40aa08e78837',
  'Diploma in Electrical Engineering': '1581092918056-0c4c3acd3789',
  'Diploma in TV Anchoring & Reporting': '1598743400863-0201c7e1445b',
  'Diploma in Tourism & Hospitality': '1488646953014-85cb44e25828',
  'Diploma in Vastu': '1532619675605-1ede6c2ed2b0',
  'Diploma in Front Office Operation': '1566073771259-6a8506099945',
};

const imageFor = (title, categoryName) =>
  ux(courseImageIds[title] || categoryImageIds[categoryName] || '1523050854058-8df90110c9f1');

// --- Category master list -------------------------------------------------
export const categories = [
  {
    name: 'Information Technology',
    icon: 'Cpu',
    color: 'from-red-500 to-rose-600',
    featuredHome: true,
    description: 'Industry-aligned IT, software and computer application programs.',
  },
  {
    name: 'Nursery Teacher Training',
    label: 'Teacher Training',
    icon: 'GraduationCap',
    color: 'from-orange-500 to-amber-500',
    featuredHome: true,
    description: 'NTT, PTT and computer teacher training diplomas for educators.',
  },
  {
    name: 'Management Programs',
    icon: 'Briefcase',
    color: 'from-rose-500 to-red-600',
    featuredHome: true,
    description: 'Business, HR, finance, marketing and operations management.',
  },
  {
    name: 'Hotel Management',
    icon: 'Hotel',
    color: 'from-rose-500 to-pink-600',
    featuredHome: true,
    description: 'Front office, hospitality and tourism career programs.',
  },
  {
    name: 'Fashion / Textile / Interior Designing',
    label: 'Fashion Designing',
    icon: 'Scissors',
    color: 'from-pink-500 to-rose-500',
    featuredHome: true,
    description: 'Creative design diplomas in fashion, interior and textiles.',
  },
  {
    name: 'Multimedia',
    icon: 'Clapperboard',
    color: 'from-pink-500 to-rose-600',
    featuredHome: true,
    description: 'Animation, web and graphic design creative skills.',
  },
  {
    name: 'Beautician',
    icon: 'Sparkles',
    color: 'from-amber-400 to-orange-500',
    featuredHome: true,
    description: 'Professional beauty, grooming and cosmetology training.',
  },
  {
    name: 'Fire & Safety Programs',
    label: 'Fire & Safety',
    icon: 'Flame',
    color: 'from-red-500 to-orange-600',
    featuredHome: true,
    description: 'Industrial fire safety and disaster management programs.',
  },
  {
    name: 'Nursing Teacher Training',
    label: 'Nursing Programs',
    icon: 'Stethoscope',
    color: 'from-orange-500 to-red-600',
    featuredHome: true,
    description: 'Healthcare and nursing training for aspiring caregivers.',
  },
  {
    name: 'Yoga',
    label: 'Yoga Programs',
    icon: 'Flower2',
    color: 'from-amber-500 to-orange-600',
    featuredHome: true,
    description: 'Yoga and naturopathy diploma and certification courses.',
  },
  {
    name: 'Paramedical',
    icon: 'HeartPulse',
    color: 'from-orange-400 to-amber-600',
    featuredHome: true,
    description: 'Nursing assistance, medical secretary and caregiver programs.',
  },
  {
    name: 'Hardware & Networking',
    icon: 'Network',
    color: 'from-red-600 to-orange-500',
    featuredHome: true,
    description: 'Computer hardware, maintenance and network engineering.',
  },
  {
    name: 'English Speaking & Communication',
    icon: 'Languages',
    color: 'from-rose-500 to-pink-500',
    description: 'Spoken English, personality development and interview skills.',
  },
  {
    name: 'Astrology & Vastu',
    icon: 'Compass',
    color: 'from-red-500 to-orange-500',
    description: 'Jyotish and Vastu Shastra professional diplomas.',
  },
  {
    name: 'Mass Communication',
    icon: 'Mic',
    color: 'from-orange-500 to-red-500',
    description: 'Journalism, anchoring and media production programs.',
  },
  {
    name: 'Library Science',
    icon: 'Library',
    color: 'from-amber-500 to-yellow-600',
    description: 'Library and information management courses.',
  },
  {
    name: 'Electronic Mechanic',
    icon: 'CircuitBoard',
    color: 'from-slate-500 to-gray-600',
    description: 'Electronics repair and maintenance technician training.',
  },
  {
    name: 'Engineering',
    icon: 'Cog',
    color: 'from-zinc-500 to-slate-600',
    description: 'Diploma engineering in mechanical and electrical streams.',
  },
  {
    name: 'IT Diploma Courses',
    icon: 'Code2',
    color: 'from-orange-600 to-red-500',
    description: 'Comprehensive computer diploma programs.',
  },
  {
    name: 'IT Certificate Courses',
    icon: 'FileCode',
    color: 'from-rose-600 to-pink-500',
    description: 'Short-term computer certificate courses.',
  },
  {
    name: 'Job Oriented Programmes',
    icon: 'Hammer',
    color: 'from-yellow-500 to-orange-500',
    description: 'Skill-based vocational programs for quick employment.',
  },
].map((c) => ({ ...c, slug: slugify(c.name), label: c.label || c.name }));

// --- Raw course listing by category --------------------------------------
const courseGroups = {
  'Beautician': ['Diploma in Beautician & Cosmetology'],
  'Fire & Safety Programs': ['Diploma in Fire & Safety Management'],
  'Fashion / Textile / Interior Designing': [
    'Diploma in Fashion Designing',
    'Diploma in Interior Designing',
    'Diploma in Textile Designing',
    'Diploma in Jewelry Designing',
  ],
  'English Speaking & Communication': [
    'Certification in Interviews & Group Discussion',
    'Diploma in English Speaking & Personality Development',
  ],
  'Astrology & Vastu': ['Diploma in Jyotish Ratana', 'Diploma in Vastu'],
  'Hotel Management': [
    'Diploma in Front Office Operation',
    'Diploma in Hotel Management',
    'Diploma in Tourism & Hospitality',
  ],
  'Information Technology': [
    'Certificate in Stadd Pro',
    'Certificate in Typing',
    'Certificate in 3D Max',
    'Certificate in Pro-E',
    'Certificate in Tally Accounting',
    'Computer Aided Design',
  ],
  'Nursery Teacher Training': [
    'Diploma in Nursery Teacher Training',
    'Advance Diploma in Nursery Teacher Training',
    'Diploma in Computer Teacher Training',
    'Advance Diploma in Computer Teacher Training',
    'Diploma in Primary Teacher Training',
    'Advance Diploma in Primary Teacher Training',
  ],
  'Nursing Teacher Training': ['Diploma in Nursing Teacher Training'],
  'Mass Communication': [
    'Diploma in Journalism & Mass Communication',
    'Diploma in TV Anchoring & Reporting',
  ],
  'Management Programs': [
    'Diploma in Business Management',
    'Diploma in Financial Accounting',
    'Diploma in Business Law',
    'Diploma in Marketing Management',
    'Diploma in MIS',
    'Diploma in Project Management',
    'Diploma in Leadership Management',
    'Diploma in Supply Chain Management',
    'Diploma in HR Management',
    'Diploma in Banking & Finance Management',
    'Diploma in International Business Management',
    'Diploma in Risk Management',
    'Diploma in Operation Management',
    'Diploma in Retail Management',
    'Diploma in Information Technology',
  ],
  'Library Science': [
    'Certificate in Library Science',
    'Diploma in Library Science',
    'Diploma in Business Communication',
  ],
  'Electronic Mechanic': ['Diploma in Electronic Mechanic'],
  'Yoga': ['Diploma in Yoga & Naturopathy', 'Certification in Yoga & Naturopathy'],
  'Hardware & Networking': [
    'Diploma in Computer Hardware & Networking',
    'Diploma in Network Engineer',
  ],
  'Multimedia': ['3D Animation', 'Fashion Designing', 'Web Designing'],
  'Engineering': [
    'Diploma in Mechanical Engineering',
    'Diploma in Electrical Engineering',
  ],
  'IT Diploma Courses': [
    'ADCA',
    'ADIT',
    'DCA',
    'DIT',
    'Diploma in Software Engineering',
    'Diploma in E-Commerce',
    'Diploma in Multimedia',
    'Diploma in Account Professional',
    'Diploma in Computer Hardware & Maintenance',
    'Diploma in Computer Science',
    'MDIT',
    'Diploma in Computer Education',
  ],
  'IT Certificate Courses': [
    'CCA',
    'CCP',
    'CCHM',
    'CAP',
    'Computer Operator',
    'Programming Technique',
    'C & C++',
    'Web Designing',
    'Computer Assembling & Troubleshooting',
    'Desktop Publishing',
    'PHP & MYSQL',
    'VB.NET',
    'ASP.NET',
    'Java & Advance Java',
  ],
  'Paramedical': [
    'Diploma in Nanny Care / Live In Care Giver',
    'Paramedical & Nursing Programs',
    'Medical Secretary',
  ],
  'Job Oriented Programmes': [
    'Diploma In Plumbing Certification (1 Year)',
    'Cutting Tailoring Embroidery',
  ],
};

// --- Content generation helpers ------------------------------------------
const inferType = (title) => {
  const t = title.toLowerCase();
  if (t.startsWith('advance diploma') || t.startsWith('master')) return 'Advance Diploma';
  if (t.startsWith('diploma')) return 'Diploma';
  if (t.startsWith('certificate') || t.startsWith('certification')) return 'Certificate';
  if (/^(adca|adit|mdit)/.test(t)) return 'Advance Diploma';
  if (/^(dca|dit|cca|ccp|cchm|cap)/.test(t)) return 'Diploma';
  return 'Certificate';
};

const durationFor = (type, title) => {
  if (/\(1 year\)/i.test(title)) return '12 Months';
  switch (type) {
    case 'Advance Diploma':
      return '12 Months';
    case 'Diploma':
      return '6 Months';
    case 'Certificate':
      return '3 Months';
    default:
      return '6 Months';
  }
};

const levelFor = (type) =>
  type === 'Advance Diploma' ? 'Advanced' : type === 'Diploma' ? 'Intermediate' : 'Beginner';

// Deterministic pseudo-random so values are stable across renders/builds
const seeded = (str, min, max) => {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) % 100000;
  return min + (h % (max - min + 1));
};

const buildCurriculum = (title, type) => {
  const base = [
    `Foundations & Introduction to ${title.replace(/^(Advance )?Diploma in |^Certif(icate|ication) in /i, '')}`,
    'Core Concepts & Industry Standards',
    'Hands-on Practical Tools & Techniques',
    'Real-world Projects & Case Studies',
  ];
  if (type !== 'Certificate') {
    base.push('Advanced Specialisation Modules', 'Industry Internship & Live Project');
  }
  base.push('Soft Skills, Interview Preparation & Certification');
  return base.map((m, i) => ({
    module: `Module ${i + 1}`,
    title: m,
    topics: [
      'Concept walkthrough & demonstrations',
      'Guided lab / practical sessions',
      'Assessment & doubt clearing',
    ],
  }));
};

const buildFaqs = (title, duration, type) => [
  {
    q: `What is the duration of ${title}?`,
    a: `The ${title} program runs for approximately ${duration}, including practical training and assessments.`,
  },
  {
    q: 'Is this program suitable for beginners?',
    a:
      type === 'Certificate'
        ? 'Yes. This course starts from the fundamentals and is ideal for fresh learners.'
        : 'Yes. The curriculum is structured to take learners from basics to job-ready skills.',
  },
  {
    q: 'Do you provide a certificate on completion?',
    a: 'Yes, SEMT awards a recognised completion certificate along with placement assistance.',
  },
  {
    q: 'Are EMI / flexible fee options available?',
    a: 'Yes, SEMT offers affordable fees with flexible installment options for eligible students.',
  },
];

const careerFor = (categoryName) => {
  const map = {
    'Information Technology': ['IT Support Executive', 'Data Entry Specialist', 'Office Automation Executive', 'Accounting Assistant'],
    'IT Diploma Courses': ['Software Developer', 'Web Developer', 'IT Executive', 'System Administrator'],
    'IT Certificate Courses': ['Computer Operator', 'Junior Programmer', 'DTP Operator', 'Web Designer'],
    'Hardware & Networking': ['Network Engineer', 'Hardware Technician', 'IT Support Engineer', 'System Engineer'],
    'Management Programs': ['Business Analyst', 'HR Executive', 'Operations Executive', 'Marketing Manager'],
    'Hotel Management': ['Front Office Executive', 'Hospitality Manager', 'Guest Relations Executive', 'Tour Coordinator'],
    'Fashion / Textile / Interior Designing': ['Fashion Designer', 'Interior Designer', 'Textile Designer', 'Boutique Owner'],
    'Multimedia': ['Graphic Designer', 'Animator', 'Web Designer', 'Video Editor'],
    'Beautician': ['Beautician', 'Salon Manager', 'Makeup Artist', 'Beauty Entrepreneur'],
    'Fire & Safety Programs': ['Fire Safety Officer', 'Safety Supervisor', 'HSE Executive', 'Safety Inspector'],
    'Nursing Teacher Training': ['Nursing Trainer', 'Healthcare Assistant', 'Care Coordinator', 'Clinical Instructor'],
    'Nursery Teacher Training': ['Pre-Primary Teacher', 'Nursery Teacher', 'Primary Teacher', 'Montessori Educator'],
    'Yoga': ['Yoga Instructor', 'Naturopathy Consultant', 'Wellness Coach', 'Studio Owner'],
    'Paramedical': ['Nursing Assistant', 'Medical Secretary', 'Caregiver', 'Patient Care Coordinator'],
    'English Speaking & Communication': ['Customer Support Executive', 'Soft Skills Trainer', 'Tele-Caller', 'Front Desk Executive'],
    'Astrology & Vastu': ['Astrologer', 'Vastu Consultant', 'Spiritual Advisor', 'Independent Practitioner'],
    'Mass Communication': ['News Reporter', 'TV Anchor', 'Content Writer', 'Media Coordinator'],
    'Library Science': ['Librarian', 'Library Assistant', 'Information Officer', 'Archivist'],
    'Electronic Mechanic': ['Electronics Technician', 'Repair Engineer', 'Service Technician', 'Maintenance Engineer'],
    'Engineering': ['Junior Engineer', 'Maintenance Technician', 'Site Supervisor', 'CAD Technician'],
    'Job Oriented Programmes': ['Plumber', 'Tailor / Boutique Owner', 'Skilled Technician', 'Self Employed Professional'],
  };
  return map[categoryName] || ['Industry Professional', 'Skilled Executive', 'Team Lead', 'Entrepreneur'];
};

// Courses highlighted on the home "Popular Courses" grid
const featuredTitles = new Set([
  'ADCA',
  'Diploma in Fashion Designing',
  'Diploma in Hotel Management',
  'Diploma in English Speaking & Personality Development',
  'Diploma in Nursery Teacher Training',
  'Diploma in Computer Hardware & Networking',
]);

// --- Build flat course array ---------------------------------------------
let counter = 0;
export const courses = Object.entries(courseGroups).flatMap(([categoryName, list]) => {
  const category = categories.find((c) => c.name === categoryName);
  return list.map((title) => {
    counter += 1;
    const type = inferType(title);
    const duration = durationFor(type, title);
    const slug = slugify(`${title}-${category.slug}`).slice(0, 60);
    const fee = seeded(slug, 60, 240) * 100; // 6,000 - 24,000
    return {
      id: counter,
      title,
      slug,
      type,
      category: category.slug,
      categoryName,
      duration,
      level: levelFor(type),
      students: seeded(slug + 's', 40, 480),
      rating: (4 + seeded(slug + 'r', 3, 9) / 10).toFixed(1),
      fee,
      feeLabel: `₹${fee.toLocaleString('en-IN')}`,
      image: imageFor(title, categoryName),
      featured: featuredTitles.has(title),
      shortDescription: `Build job-ready skills in ${title.replace(
        /^(Advance )?Diploma in |^Certif(icate|ication) in /i,
        ''
      )} through hands-on practical training, live projects and expert mentorship at SEMT.`,
      overview: `${title} is a ${duration.toLowerCase()} ${type.toLowerCase()} program offered by SEMT under the ${categoryName} stream. The course blends conceptual understanding with extensive practical training so learners graduate job-ready. Designed and delivered by experienced faculty, it focuses on real-world skills, current industry tools and the soft skills employers expect.`,
      eligibility:
        type === 'Advance Diploma'
          ? '10+2 pass (any stream). Basic familiarity with the subject is helpful but not mandatory.'
          : type === 'Diploma'
          ? '10th / 10+2 pass from a recognised board. Open to fresh learners.'
          : '10th pass or equivalent. Open to all learners with an interest in the field.',
      eligibilityList:
        type === 'Advance Diploma'
          ? ['10+2 from a recognised board', 'No prior experience required', 'Basic computer literacy helpful']
          : ['10th or 10+2 pass', 'No prior experience required', 'Aptitude & interest in the field'],
      curriculum: buildCurriculum(title, type),
      careerOpportunities: careerFor(categoryName),
      faqs: buildFaqs(title, duration, type),
    };
  });
});

export const featuredCourses = courses.filter((c) => c.featured);
export const courseTypes = ['Diploma', 'Advance Diploma', 'Certificate'];

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);
export const getCoursesByCategory = (catSlug) => courses.filter((c) => c.category === catSlug);
export const getRelatedCourses = (course, limit = 3) =>
  courses.filter((c) => c.category === course.category && c.id !== course.id).slice(0, limit);

export const courseCountByCategory = categories.reduce((acc, cat) => {
  acc[cat.slug] = courses.filter((c) => c.category === cat.slug).length;
  return acc;
}, {});

export default courses;
