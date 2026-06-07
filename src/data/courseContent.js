// ---------------------------------------------------------------------------
// Premium, hand-written SEO + conversion content for SEMT's top / most-searched
// courses. Keyed by EXACT course title; merged into courses.js (overrides the
// auto-generated overview / curriculum / faqs for these courses).
//
// Each entry targets high-intent keywords: "{course} course in Mohali",
// "after 12th", "syllabus", "duration", "scope", "placement", plus location
// keywords (Mohali, Chandigarh, Tricity, Punjab).
// ---------------------------------------------------------------------------

const m = (n, title, topics) => ({ module: `Module ${n}`, title, topics });

export const courseContentOverrides = {
  // ---------------------------------------------------------------- ADCA
  ADCA: {
    overview:
      'ADCA (Advanced Diploma in Computer Applications) is one of the most popular computer courses in Mohali for students after 10th and 12th who want a job-ready IT career. This advanced diploma takes you from computer fundamentals to MS Office, Tally accounting, internet tools, DBMS and web basics through 100% practical, hands-on training. Delivered by experienced faculty at SEMT, the ADCA course in Mohali focuses on real workplace skills, live projects and interview confidence. With a recognised certificate and dedicated placement assistance, ADCA opens doors to roles like computer operator, office executive, data entry specialist and accounting assistant across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Computer Fundamentals & Operating System', ['Computer basics & hardware', 'Windows & file management', 'Typing & shortcuts']),
      m(2, 'MS Office Suite', ['MS Word documents & reports', 'MS Excel formulas & charts', 'PowerPoint presentations']),
      m(3, 'Internet, Email & Cloud Tools', ['Web browsing & research', 'Email & Google Workspace', 'Online forms & cloud storage']),
      m(4, 'Tally & Computerised Accounting', ['Vouchers, ledgers & GST', 'Inventory & billing', 'Financial reports']),
      m(5, 'Database Management (DBMS)', ['MS Access basics', 'Tables, forms & queries', 'Data entry best practices']),
      m(6, 'Web & Multimedia Basics', ['HTML & web page basics', 'Intro to web designing', 'Image editing essentials']),
      m(7, 'Live Project, Soft Skills & Certification', ['Real-world project', 'Resume & interview prep', 'Final assessment & certificate']),
    ],
    faqs: [
      { q: 'Is ADCA a good course for a career after 12th?', a: 'Yes. ADCA is an excellent job-oriented computer course after 10th or 12th. It builds practical skills in MS Office, Tally, accounting and web basics that employers in Mohali and Chandigarh actively hire for.' },
      { q: 'What is the duration of the ADCA course?', a: 'The ADCA course at SEMT is approximately 12 months, with flexible weekday and weekend batches in Mohali including practical labs and a live project.' },
      { q: 'What is the ADCA course syllabus?', a: 'The ADCA syllabus covers computer fundamentals, MS Office, internet, Tally accounting with GST, DBMS, and web & multimedia basics — all taught with 100% hands-on practical training.' },
      { q: 'What is the scope and salary after ADCA in Mohali?', a: 'After ADCA you can work as a computer operator, office executive, data entry operator or accounting assistant. It is also a strong base for further IT and accounting careers across the Tricity.' },
      { q: 'Does SEMT provide placement assistance after ADCA?', a: 'Yes. SEMT provides dedicated placement assistance, interview preparation and career counselling with a 95% placement track record and active hiring partners.' },
      { q: 'What is the eligibility for the ADCA course?', a: 'Eligibility is 10th or 10+2 pass from any stream. No prior computer knowledge is required — the course starts from the basics.' },
    ],
  },

  // ---------------------------------------------------------------- DCA
  DCA: {
    overview:
      'DCA (Diploma in Computer Applications) is a job-oriented computer course in Mohali ideal for students after 10th and 12th who want quick, practical computer skills. This diploma covers computer fundamentals, MS Office, internet, and Tally accounting basics through hands-on training at SEMT. Taught by experienced faculty, the DCA course in Mohali helps you become office-ready and confident with everyday business software. With a recognised certificate and placement assistance, DCA leads to roles like computer operator, office assistant and data entry executive across Chandigarh and Punjab — and is a perfect stepping stone to ADCA and advanced IT programs.',
    curriculum: [
      m(1, 'Computer Fundamentals & Windows', ['Basics of computers & hardware', 'Operating system & files', 'Typing practice']),
      m(2, 'MS Word & Documentation', ['Document formatting', 'Tables & mail merge', 'Reports & letters']),
      m(3, 'MS Excel & Data Handling', ['Formulas & functions', 'Charts & data analysis', 'Worksheets & reports']),
      m(4, 'MS PowerPoint & Internet', ['Professional presentations', 'Internet & email', 'Online tools & research']),
      m(5, 'Tally & Basic Accounting', ['Accounting basics', 'Vouchers & GST entries', 'Billing & ledgers']),
      m(6, 'Project, Soft Skills & Certification', ['Practical project', 'Interview & resume prep', 'Assessment & certificate']),
    ],
    faqs: [
      { q: 'Is DCA a good course after 12th?', a: 'Yes. DCA is a practical, affordable computer course after 10th/12th that quickly makes you office-ready and employable in Mohali and Chandigarh.' },
      { q: 'What is the duration of the DCA course?', a: 'The DCA course at SEMT runs for approximately 6 months with practical labs and flexible batch timings in Mohali.' },
      { q: 'What is the difference between DCA and ADCA?', a: 'DCA is a 6-month foundation in computer applications, while ADCA is a 12-month advanced diploma covering additional modules like DBMS and web basics. Many students do DCA first, then ADCA.' },
      { q: 'What is the DCA syllabus at SEMT?', a: 'The DCA syllabus covers computer fundamentals, MS Office (Word, Excel, PowerPoint), internet & email, and Tally accounting basics — all with hands-on training.' },
      { q: 'What jobs can I get after DCA in Mohali?', a: 'After DCA you can work as a computer operator, office assistant, data entry executive or front-desk executive across the Chandigarh Tricity. SEMT provides placement assistance.' },
      { q: 'What is the eligibility for DCA?', a: 'Eligibility is 10th or 10+2 pass. No prior experience is required.' },
    ],
  },

  // ------------------------------------------ Computer Hardware & Networking
  'Diploma in Computer Hardware & Networking': {
    overview:
      'The Diploma in Computer Hardware & Networking is a high-demand, job-oriented course in Mohali for students who want a hands-on IT career. You learn computer assembling, troubleshooting, operating systems, server configuration, and enterprise networking including LAN, WAN, routers, switches and CCNA-level concepts. SEMT delivers this hardware and networking course in Mohali with 100% practical lab training on real equipment, guided by experienced engineers. With a recognised certificate and placement assistance, graduates become network engineers, hardware technicians and IT support engineers across the Chandigarh Tricity, Punjab and the rest of India.',
    curriculum: [
      m(1, 'Computer Hardware Fundamentals', ['Components & assembling', 'Installation & BIOS', 'Preventive maintenance']),
      m(2, 'Troubleshooting & Repair', ['Diagnosing faults', 'Hardware repair', 'Data backup & recovery']),
      m(3, 'Operating Systems & Software', ['Windows installation', 'Drivers & utilities', 'Linux basics']),
      m(4, 'Networking Fundamentals', ['LAN, WAN & topologies', 'IP addressing & subnetting', 'Cabling & connectivity']),
      m(5, 'Routers, Switches & CCNA Concepts', ['Router/switch configuration', 'Routing & VLANs', 'Network security basics']),
      m(6, 'Servers & Network Administration', ['Server setup', 'User & access management', 'Monitoring & maintenance']),
      m(7, 'Live Project, Soft Skills & Certification', ['Real network setup project', 'Interview preparation', 'Assessment & certificate']),
    ],
    faqs: [
      { q: 'Is hardware and networking a good career in 2026?', a: 'Yes. Hardware and networking is a future-proof, high-demand field. Every company needs IT support, network engineers and system administrators, making it a stable career after 10th/12th.' },
      { q: 'What is the duration of the Hardware & Networking course?', a: 'The Diploma in Computer Hardware & Networking at SEMT is approximately 6 months with 100% practical lab training in Mohali.' },
      { q: 'What is the hardware and networking syllabus?', a: 'The syllabus covers assembling, troubleshooting, operating systems, networking fundamentals, routers/switches, CCNA-level concepts and server administration.' },
      { q: 'What is the scope after hardware and networking in Mohali?', a: 'You can become a network engineer, hardware technician, IT support engineer or system administrator across the Chandigarh Tricity and beyond. SEMT provides placement assistance.' },
      { q: 'Do I need a technical background to join?', a: 'No. The course starts from the basics and is suitable for students after 10th/12th. All training is hands-on with real equipment.' },
      { q: 'Does SEMT provide placement after this course?', a: 'Yes. SEMT offers dedicated placement assistance, interview prep and a strong network of hiring partners.' },
    ],
  },

  // ---------------------------------------------------------------- Web Designing
  'Web Designing': {
    overview:
      'The Web Designing course in Mohali at SEMT teaches you to design and build stunning, responsive websites that businesses and employers love. You learn HTML5, CSS3, responsive layouts, UI/UX fundamentals, Bootstrap and the design tools used by professional web designers today. With 100% practical, project-based training, you build a real portfolio of websites while you learn. Ideal for students after 10th/12th, graphic designers and aspiring freelancers, this web design course in Mohali comes with a recognised certificate and placement assistance — preparing you for roles as a web designer, UI designer or freelance web developer across the Chandigarh Tricity.',
    curriculum: [
      m(1, 'Web Design Foundations', ['How the web works', 'Design principles & colour', 'Wireframing & layout']),
      m(2, 'HTML5', ['Structure & semantic tags', 'Forms & media', 'Tables & links']),
      m(3, 'CSS3 & Responsive Design', ['Styling & selectors', 'Flexbox & grid', 'Mobile-first responsive layouts']),
      m(4, 'Bootstrap & UI Frameworks', ['Bootstrap components', 'Responsive navbars & grids', 'Reusable UI patterns']),
      m(5, 'UI/UX & Design Tools', ['UX basics & user flow', 'Figma / design tools', 'Image optimisation']),
      m(6, 'Portfolio Project & Certification', ['Build a live website', 'Hosting basics', 'Portfolio, interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is web designing a good career after 12th?', a: 'Yes. Web designing is a creative, high-demand and freelancing-friendly career. With a strong portfolio, students after 10th/12th can quickly find jobs or work independently.' },
      { q: 'What is the duration of the web designing course?', a: 'The web designing course at SEMT is approximately 3–6 months with 100% practical, project-based training in Mohali.' },
      { q: 'What is the web designing syllabus?', a: 'The syllabus covers HTML5, CSS3, responsive design, Bootstrap, UI/UX fundamentals and design tools, with a real portfolio project.' },
      { q: 'Do I need coding knowledge to learn web designing?', a: 'No prior coding is required. The course starts from the basics and gradually builds your front-end skills through hands-on practice.' },
      { q: 'What is the scope after web designing in Mohali?', a: 'You can work as a web designer, UI designer or freelancer, or progress into web development. SEMT provides placement assistance across the Tricity.' },
      { q: 'Will I build a portfolio during the course?', a: 'Yes. You build live, responsive websites throughout the course so you graduate with a job-ready portfolio.' },
    ],
  },

  // ---------------------------------------------------------------- 3D Animation
  '3D Animation': {
    overview:
      'The 3D Animation course in Mohali at SEMT helps you turn creativity into a high-paying career in animation, VFX and gaming. You learn modeling, texturing, rigging, lighting, character animation and rendering using industry-standard software, with 100% practical, project-based training. Perfect for students after 10th/12th and creative aspirants, this 3D animation course builds a professional showreel while you learn. With a recognised certificate and placement assistance, graduates pursue roles like 3D animator, modeler, VFX artist and motion designer across studios in the Chandigarh Tricity, Punjab and the media industry.',
    curriculum: [
      m(1, 'Animation & Design Foundations', ['Principles of animation', 'Sketching & storyboarding', 'Design fundamentals']),
      m(2, '3D Modeling & Texturing', ['Polygon modeling', 'UV mapping & textures', 'Materials & shaders']),
      m(3, 'Rigging & Character Setup', ['Skeleton & joints', 'Skinning & controls', 'Character rigging']),
      m(4, 'Lighting & Rendering', ['Lighting techniques', 'Cameras & composition', 'Rendering & output']),
      m(5, 'Character & Motion Animation', ['Keyframe animation', 'Walk cycles & acting', 'Motion graphics']),
      m(6, 'Showreel Project & Certification', ['Final animation project', 'Showreel building', 'Portfolio, interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is 3D animation a good career option?', a: 'Yes. With booming demand in films, OTT, gaming and advertising, 3D animation is a creative, high-paying career for students after 10th/12th who love design and storytelling.' },
      { q: 'What is the duration of the 3D animation course?', a: 'The 3D animation course at SEMT is approximately 6 months with 100% practical training and a showreel project in Mohali.' },
      { q: 'What software will I learn in the 3D animation course?', a: 'You learn industry-standard 3D software covering modeling, texturing, rigging, lighting, animation and rendering.' },
      { q: 'Do I need drawing skills for 3D animation?', a: 'Basic interest in design helps, but it is not mandatory. The course teaches you the fundamentals of animation and design from scratch.' },
      { q: 'What is the scope after 3D animation in Mohali?', a: 'You can work as a 3D animator, modeler, VFX artist or motion designer in studios and agencies across the Tricity. SEMT provides placement assistance.' },
      { q: 'Will I build a showreel during the course?', a: 'Yes. You create a professional showreel and portfolio that helps you stand out to employers and studios.' },
    ],
  },

  // ---------------------------------------------------------------- Multimedia
  'Diploma in Multimedia': {
    overview:
      'The Diploma in Multimedia in Mohali is a creative, job-oriented course covering graphic design, web design, 2D/3D animation and video editing in one program. At SEMT you get 100% practical training in design and editing tools, building a strong portfolio across print, digital and motion media. Ideal for students after 10th/12th and creative minds, this multimedia course in Mohali prepares you for in-demand roles like graphic designer, multimedia artist, video editor and web designer. With a recognised certificate and placement assistance, you graduate ready for studios, agencies and freelancing across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Graphic Design Foundations', ['Design principles & colour', 'Photoshop essentials', 'CorelDRAW / Illustrator']),
      m(2, 'Print & Digital Design', ['Logos & branding', 'Brochures & posters', 'Social media creatives']),
      m(3, 'Web Design Basics', ['HTML & CSS basics', 'Responsive layouts', 'UI fundamentals']),
      m(4, '2D & 3D Animation', ['Animation principles', '2D motion graphics', 'Intro to 3D']),
      m(5, 'Video Editing & Audio', ['Editing fundamentals', 'Transitions & effects', 'Export & publishing']),
      m(6, 'Portfolio Project & Certification', ['Multimedia project', 'Portfolio building', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'What is a multimedia course and is it worth it?', a: 'A multimedia course combines graphic design, animation, web design and video editing. It is highly worth it for creative students after 10th/12th who want versatile, in-demand skills.' },
      { q: 'What is the duration of the multimedia diploma?', a: 'The Diploma in Multimedia at SEMT is approximately 6 months with 100% practical training and a portfolio project in Mohali.' },
      { q: 'What software is taught in the multimedia course?', a: 'You learn graphic design tools (Photoshop, CorelDRAW/Illustrator), web basics, animation and video-editing software.' },
      { q: 'What jobs can I get after a multimedia course in Mohali?', a: 'You can become a graphic designer, multimedia artist, video editor or web designer across studios and agencies in the Tricity. SEMT provides placement assistance.' },
      { q: 'Do I need design experience to join?', a: 'No. The course starts from the basics and is ideal for fresh, creative learners after 10th/12th.' },
      { q: 'Can I freelance after the multimedia course?', a: 'Yes. With a strong portfolio you can freelance in design, editing and animation alongside or instead of a job.' },
    ],
  },

  // ---------------------------------------------------------------- Fashion Designing
  'Diploma in Fashion Designing': {
    overview:
      'The Diploma in Fashion Designing in Mohali at SEMT turns your creativity into a thriving fashion career. You learn fashion illustration, sketching, garment construction, draping, pattern making, textiles and styling through 100% practical, hands-on training. Guided by experienced designers, this fashion designing course in Mohali helps you build a real design portfolio and the skills to launch your own label. Ideal for students after 10th/12th and creative aspirants, the program comes with a recognised certificate and placement assistance — preparing you for roles as a fashion designer, stylist, boutique owner or entrepreneur across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Fashion Design Fundamentals', ['History & elements of fashion', 'Colour & design principles', 'Fashion illustration']),
      m(2, 'Sketching & Figure Drawing', ['Croquis & figures', 'Garment sketching', 'Design development']),
      m(3, 'Textiles & Fabrics', ['Fabric types & properties', 'Fabric selection', 'Surface ornamentation']),
      m(4, 'Pattern Making & Cutting', ['Body measurements', 'Pattern drafting', 'Cutting techniques']),
      m(5, 'Garment Construction & Draping', ['Stitching & finishing', 'Draping on dummy', 'Garment fitting']),
      m(6, 'Styling & Portfolio', ['Personal & fashion styling', 'Trend forecasting', 'Design portfolio']),
      m(7, 'Final Collection, Soft Skills & Certification', ['Create a mini collection', 'Boutique & business basics', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is fashion designing a good career after 12th?', a: 'Yes. Fashion designing is a creative, high-growth career with options in design houses, boutiques, styling and entrepreneurship — ideal for students after 10th/12th.' },
      { q: 'What is the duration of the fashion designing course?', a: 'The Diploma in Fashion Designing at SEMT is approximately 6 months with 100% practical training and a final collection in Mohali.' },
      { q: 'What is the fashion designing syllabus?', a: 'The syllabus covers illustration, sketching, textiles, pattern making, garment construction, draping, styling and portfolio development.' },
      { q: 'Do I need drawing skills to learn fashion designing?', a: 'No. Sketching is taught from scratch. A creative interest is all you need to begin.' },
      { q: 'What is the scope after fashion designing in Mohali?', a: 'You can work as a fashion designer, stylist or boutique owner, or start your own label. SEMT provides placement assistance across the Tricity.' },
      { q: 'Will I make my own designs during the course?', a: 'Yes. You build a design portfolio and create your own mini collection by the end of the course.' },
    ],
  },

  // ---------------------------------------------------------------- Interior Designing
  'Diploma in Interior Designing': {
    overview:
      'The Diploma in Interior Designing in Mohali at SEMT prepares you for a booming career in residential and commercial design. You learn space planning, colour theory, materials, furniture design, lighting and design software with 100% practical, project-based training. Taught by experienced designers, this interior designing course in Mohali helps you build a professional portfolio of real design projects. Ideal for students after 10th/12th and creative aspirants, it comes with a recognised certificate and placement assistance — leading to careers as an interior designer, space planner, 3D visualiser or design entrepreneur across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Interior Design Foundations', ['Design elements & principles', 'Colour theory', 'Design history & styles']),
      m(2, 'Space Planning', ['Measurements & layouts', 'Functional planning', 'Residential & commercial spaces']),
      m(3, 'Materials & Finishes', ['Materials & textures', 'Furniture & furnishings', 'Estimation basics']),
      m(4, 'Lighting & Decor', ['Lighting design', 'Decor & styling', 'Sustainable design']),
      m(5, 'Design Software & Drafting', ['AutoCAD basics', '2D/3D visualisation', 'Presentation drawings']),
      m(6, 'Portfolio Project & Certification', ['Live design project', 'Client presentation', 'Portfolio, interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is interior designing a good career in India?', a: 'Yes. With rapid growth in real estate and renovation, interior designing is a high-demand, creative and well-paying career for students after 10th/12th.' },
      { q: 'What is the duration of the interior designing course?', a: 'The Diploma in Interior Designing at SEMT is approximately 6 months with 100% practical training and a design project in Mohali.' },
      { q: 'What is the interior designing syllabus?', a: 'The syllabus covers design fundamentals, space planning, materials, lighting, decor and design software like AutoCAD with 3D visualisation.' },
      { q: 'Do I need to know software before joining?', a: 'No. Design software such as AutoCAD is taught from the basics during the course.' },
      { q: 'What is the scope after interior designing in Mohali?', a: 'You can work as an interior designer, space planner or 3D visualiser, or start your own studio across the Tricity. SEMT provides placement assistance.' },
      { q: 'Will I create a portfolio in this course?', a: 'Yes. You complete live design projects and build a professional portfolio to showcase to clients and employers.' },
    ],
  },

  // ---------------------------------------------------------------- Hotel Management
  'Diploma in Hotel Management': {
    overview:
      'The Diploma in Hotel Management in Mohali at SEMT launches your career in the booming hospitality and tourism industry. You gain practical training in front office operations, food & beverage service, housekeeping, guest relations and hospitality communication. Delivered by experienced faculty, this hotel management course in Mohali blends real-world skills with personality development and industry exposure. Ideal for students after 10th/12th, it comes with a recognised certificate and placement assistance — preparing you for roles like front office executive, guest relations executive, hospitality manager and tour coordinator with hotels, resorts and airlines across India and abroad.',
    curriculum: [
      m(1, 'Introduction to Hospitality', ['Hotel industry overview', 'Departments & roles', 'Hospitality etiquette']),
      m(2, 'Front Office Operations', ['Reservations & check-in', 'Guest handling', 'Billing & PMS software']),
      m(3, 'Food & Beverage Service', ['Restaurant service', 'Table setup & etiquette', 'Menu knowledge']),
      m(4, 'Housekeeping Operations', ['Room cleaning standards', 'Laundry & supplies', 'Hygiene & safety']),
      m(5, 'Guest Relations & Communication', ['Guest service skills', 'Handling complaints', 'Personality development']),
      m(6, 'Tourism & Hospitality Project', ['Industry exposure', 'Live role-play', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is hotel management a good career after 12th?', a: 'Yes. Hotel management offers fast-growing, global career opportunities in hotels, resorts, airlines and events — ideal for students after 10th/12th who enjoy service and people.' },
      { q: 'What is the duration of the hotel management course?', a: 'The Diploma in Hotel Management at SEMT is approximately 6 months with practical training and industry exposure in Mohali.' },
      { q: 'What is the hotel management syllabus?', a: 'The syllabus covers front office, food & beverage service, housekeeping, guest relations and hospitality communication with practical training.' },
      { q: 'What jobs can I get after hotel management in Mohali?', a: 'You can become a front office executive, guest relations executive, hospitality manager or tour coordinator. SEMT provides placement assistance across the Tricity and beyond.' },
      { q: 'Is personality development included?', a: 'Yes. Communication and personality development are built into the course as they are essential in hospitality.' },
      { q: 'What is the eligibility for hotel management?', a: 'Eligibility is 10th or 10+2 pass. Freshers are welcome.' },
    ],
  },

  // ---------------------------------------------------------- Front Office Operation
  'Diploma in Front Office Operation': {
    overview:
      'The Diploma in Front Office Operation in Mohali at SEMT trains you for the most guest-facing role in the hospitality industry. You master reservations, check-in/check-out, guest handling, billing, property management software and professional communication through practical training. Ideal for students after 10th/12th who enjoy interacting with people, this front office course in Mohali develops the polished personality and service skills hotels demand. With a recognised certificate and placement assistance, you can begin a career as a front office executive, receptionist or guest relations executive with hotels, resorts and corporate offices across the Chandigarh Tricity and beyond.',
    curriculum: [
      m(1, 'Front Office Fundamentals', ['Role of front office', 'Hotel departments', 'Professional grooming']),
      m(2, 'Reservations & Booking', ['Reservation process', 'Room types & tariffs', 'PMS software']),
      m(3, 'Check-in & Check-out', ['Guest arrival & registration', 'Departure & settlement', 'Records & reports']),
      m(4, 'Guest Handling & Communication', ['Telephone etiquette', 'Handling requests & complaints', 'Service excellence']),
      m(5, 'Billing & Cash Handling', ['Guest billing', 'Payment modes', 'Night audit basics']),
      m(6, 'Personality, Project & Certification', ['Personality development', 'Live role-play', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'What does a front office executive do?', a: 'A front office executive manages reservations, guest check-in/out, billing and guest relations — the face of any hotel or office. It is a great entry into hospitality after 10th/12th.' },
      { q: 'What is the duration of the front office course?', a: 'The Diploma in Front Office Operation at SEMT is approximately 6 months with practical, hands-on training in Mohali.' },
      { q: 'What is the front office syllabus?', a: 'The syllabus covers reservations, check-in/out, guest handling, billing, PMS software and personality development.' },
      { q: 'What is the scope after the front office course in Mohali?', a: 'You can work as a front office executive, receptionist or guest relations executive in hotels, resorts and corporate offices. SEMT provides placement assistance.' },
      { q: 'Is communication training included?', a: 'Yes. Professional communication and personality development are core parts of this course.' },
      { q: 'What is the eligibility?', a: 'Eligibility is 10th or 10+2 pass. Freshers are welcome.' },
    ],
  },

  // ----------------------------------------------- Nursery Teacher Training
  'Diploma in Nursery Teacher Training': {
    overview:
      'The Diploma in Nursery Teacher Training (NTT) in Mohali at SEMT prepares you for a rewarding career as a pre-primary teacher. You learn child psychology, early childhood education, lesson planning, teaching methodology, classroom management and creative activities through practical training and real classroom practice. Ideal for women and students after 10th/12th who love working with children, this NTT course in Mohali builds the skills and confidence to teach in pre-schools and play schools. With a recognised certificate and placement assistance, graduates become nursery teachers, pre-primary teachers and Montessori educators across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Foundations of Early Childhood Education', ['Importance of ECE', 'Child growth & development', 'Role of a teacher']),
      m(2, 'Child Psychology', ['Understanding child behaviour', 'Learning styles', 'Emotional development']),
      m(3, 'Teaching Methodology', ['Play-way & Montessori methods', 'Phonics & storytelling', 'Audio-visual aids']),
      m(4, 'Lesson Planning & Curriculum', ['Daily lesson plans', 'Activity-based learning', 'Assessment of children']),
      m(5, 'Classroom Management', ['Discipline & engagement', 'Safety & care', 'Parent communication']),
      m(6, 'Creative Activities', ['Art & craft', 'Rhymes & games', 'Co-curricular activities']),
      m(7, 'Teaching Practice & Certification', ['Real classroom practice', 'Demo lessons', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is NTT a good course for a teaching career?', a: 'Yes. NTT is one of the best courses to become a pre-primary teacher. It is ideal for women and students after 10th/12th who want a stable, respected teaching career.' },
      { q: 'What is the duration of the NTT course?', a: 'The Diploma in Nursery Teacher Training at SEMT is approximately 6 months including teaching practice in Mohali. An advance diploma option is also available.' },
      { q: 'What is the NTT course syllabus?', a: 'The syllabus covers early childhood education, child psychology, teaching methodology, lesson planning, classroom management and creative activities.' },
      { q: 'What is the eligibility for NTT?', a: 'Eligibility is 10+2 pass. A genuine interest in working with young children is important.' },
      { q: 'What is the scope and salary after NTT in Mohali?', a: 'After NTT you can teach in pre-schools, play schools and nursery sections. SEMT provides placement assistance across the Tricity.' },
      { q: 'Does the course include real teaching practice?', a: 'Yes. You get hands-on classroom practice and demo lessons to build teaching confidence.' },
    ],
  },

  // ---------------------------------------------------------------- Beautician
  'Diploma in Beautician & Cosmetology': {
    overview:
      'The Diploma in Beautician & Cosmetology in Mohali at SEMT helps you build a rewarding beauty and grooming career or start your own salon. You learn skin care, hair care, facials, makeup, threading, manicure/pedicure, bridal makeup and advanced beauty treatments through 100% hands-on practical training. Taught by experienced beauticians, this beautician course in Mohali develops salon-ready skills and entrepreneurial confidence. Ideal for women and students after 10th, it comes with a recognised certificate and placement assistance — leading to roles as a beautician, makeup artist, salon manager or beauty entrepreneur across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Skin Care & Facials', ['Skin types & analysis', 'Cleanups & facials', 'Skin treatments']),
      m(2, 'Hair Care & Styling', ['Hair types & care', 'Cutting & styling basics', 'Hair spa & treatments']),
      m(3, 'Threading, Waxing & Grooming', ['Threading techniques', 'Waxing & bleaching', 'Hygiene & safety']),
      m(4, 'Manicure, Pedicure & Nail Art', ['Manicure & pedicure', 'Nail care', 'Basic nail art']),
      m(5, 'Makeup Artistry', ['Day & party makeup', 'Bridal makeup', 'Draping & saree styling']),
      m(6, 'Salon Business & Certification', ['Salon setup & management', 'Client handling', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is a beautician course a good career option?', a: 'Yes. The beauty industry is booming. A beautician course offers strong job and self-employment opportunities, making it ideal for women and students after 10th.' },
      { q: 'What is the duration of the beautician course?', a: 'The Diploma in Beautician & Cosmetology at SEMT is approximately 6 months with 100% practical training in Mohali.' },
      { q: 'What is the beautician course syllabus?', a: 'The syllabus covers skin care, hair care, facials, threading, waxing, manicure/pedicure, makeup and bridal makeup, plus salon management.' },
      { q: 'Can I start my own salon after this course?', a: 'Yes. The course includes salon setup and business basics so you can confidently start your own beauty business.' },
      { q: 'What is the scope after a beautician course in Mohali?', a: 'You can work as a beautician, makeup artist or salon manager, or become a beauty entrepreneur. SEMT provides placement assistance across the Tricity.' },
      { q: 'Do I need any experience to join?', a: 'No. The course is beginner-friendly and starts from the basics with full hands-on practice.' },
    ],
  },

  // ---------------------------------------------------------------- Yoga
  'Diploma in Yoga & Naturopathy': {
    overview:
      'The Diploma in Yoga & Naturopathy in Mohali at SEMT prepares you for a fulfilling career in health, wellness and holistic healing. You learn asanas, pranayama, meditation, anatomy, naturopathy, diet & nutrition and teaching methodology through practical training. Guided by experienced instructors, this yoga course in Mohali helps you become a certified yoga instructor or wellness consultant. Ideal for students after 10th/12th and fitness enthusiasts, it comes with a recognised certificate and placement assistance — leading to roles as a yoga instructor, naturopathy consultant, wellness coach or studio owner across the Chandigarh Tricity, India and abroad.',
    curriculum: [
      m(1, 'Foundations of Yoga', ['History & philosophy of yoga', 'Eight limbs of yoga', 'Yogic lifestyle']),
      m(2, 'Asanas & Practice', ['Standing & seated asanas', 'Alignment & corrections', 'Sequencing']),
      m(3, 'Pranayama & Meditation', ['Breathing techniques', 'Meditation & mindfulness', 'Relaxation methods']),
      m(4, 'Anatomy & Physiology', ['Body systems basics', 'Yoga & the body', 'Safety & contraindications']),
      m(5, 'Naturopathy & Nutrition', ['Naturopathy principles', 'Diet & nutrition', 'Natural healing therapies']),
      m(6, 'Teaching Methodology & Certification', ['How to conduct classes', 'Teaching practice', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is yoga a good career option in 2026?', a: 'Yes. With rising focus on health and wellness, certified yoga instructors are in high demand in studios, gyms, resorts and online — making it a rewarding career.' },
      { q: 'What is the duration of the yoga course?', a: 'The Diploma in Yoga & Naturopathy at SEMT is approximately 6 months with practical training and teaching practice in Mohali. A certification option is also available.' },
      { q: 'What is the yoga course syllabus?', a: 'The syllabus covers yoga philosophy, asanas, pranayama, meditation, anatomy, naturopathy, nutrition and teaching methodology.' },
      { q: 'Can I become a yoga instructor after this course?', a: 'Yes. The course includes teaching methodology and practice so you graduate ready to conduct yoga classes professionally.' },
      { q: 'What is the scope after yoga and naturopathy in Mohali?', a: 'You can work as a yoga instructor, naturopathy consultant or wellness coach, or start your own studio. SEMT provides placement assistance.' },
      { q: 'Do I need to be flexible or experienced to join?', a: 'No. The course welcomes beginners and gradually builds your practice and knowledge from the basics.' },
    ],
  },

  // ----------------------------------------- English Speaking & Personality Dev
  'Diploma in English Speaking & Personality Development': {
    overview:
      'The Diploma in English Speaking & Personality Development in Mohali at SEMT helps you speak fluent, confident English and present yourself like a professional. You master spoken English, grammar, vocabulary, pronunciation, public speaking, group discussion and interview skills through interactive, practice-based training. Ideal for students, job seekers and working professionals, this spoken English course in Mohali transforms your communication and confidence. With a recognised certificate, it prepares you to excel in interviews, customer-facing roles and your career — opening opportunities as a customer support executive, front desk executive, tele-caller or soft skills trainer across the Chandigarh Tricity.',
    curriculum: [
      m(1, 'English Foundations', ['Basic grammar', 'Sentence formation', 'Common vocabulary']),
      m(2, 'Spoken English & Fluency', ['Daily conversation', 'Pronunciation & accent', 'Fluency practice']),
      m(3, 'Vocabulary & Grammar', ['Tenses & usage', 'Word power', 'Common errors']),
      m(4, 'Public Speaking & Confidence', ['Speaking without fear', 'Presentations', 'Body language']),
      m(5, 'Group Discussion & Interview Skills', ['GD techniques', 'Interview Q&A', 'Mock interviews']),
      m(6, 'Personality Development & Certification', ['Etiquette & grooming', 'Email & professional writing', 'Final assessment & certificate']),
    ],
    faqs: [
      { q: 'How can I improve my English speaking quickly?', a: 'The fastest way is regular, guided practice. SEMT\'s spoken English course in Mohali uses daily conversation, pronunciation drills and mock sessions to build fluency fast.' },
      { q: 'What is the duration of the English speaking course?', a: 'The Diploma in English Speaking & Personality Development at SEMT is approximately 6 months with interactive, practice-based classes in Mohali.' },
      { q: 'What does the personality development course cover?', a: 'It covers spoken English, grammar, vocabulary, public speaking, group discussion, interview skills, etiquette and confidence building.' },
      { q: 'Will this course help me clear interviews?', a: 'Yes. The course includes group discussion practice, mock interviews and confidence training to help you perform in interviews and at work.' },
      { q: 'Who should join the English speaking course?', a: 'Students, job seekers and working professionals who want fluent English, strong communication and a confident personality.' },
      { q: 'Is this course suitable for beginners?', a: 'Yes. It starts from basic grammar and gradually builds fluency, so even beginners can speak confidently.' },
    ],
  },

  // ---------------------------------------------------------------- Tally
  'Certificate in Tally Accounting': {
    overview:
      'The Tally Accounting course in Mohali at SEMT makes you job-ready in computerised accounting and GST. You learn Tally Prime, accounting fundamentals, vouchers, ledgers, inventory, GST, TDS, payroll and financial reporting through 100% practical training on real business scenarios. Ideal for commerce students, accountants and job seekers after 12th, this Tally course in Mohali builds the exact skills employers and businesses need. With a recognised certificate and placement assistance, graduates work as accountants, Tally operators, accounts assistants and billing executives across the Chandigarh Tricity and Punjab.',
    curriculum: [
      m(1, 'Accounting Fundamentals', ['Basics of accounting', 'Journal & ledger', 'Trial balance']),
      m(2, 'Tally Prime Basics', ['Company creation', 'Masters & groups', 'Vouchers & entries']),
      m(3, 'Inventory & Billing', ['Stock items & godowns', 'Invoicing & billing', 'Purchase & sales']),
      m(4, 'GST in Tally', ['GST setup', 'GST invoices & returns', 'Input tax credit']),
      m(5, 'TDS, Payroll & Banking', ['TDS basics', 'Payroll processing', 'Bank reconciliation']),
      m(6, 'Financial Reports & Certification', ['Balance sheet & P&L', 'MIS reports', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is Tally a good course for a job?', a: 'Yes. Tally with GST is one of the most in-demand accounting skills. Every business needs Tally operators and accountants, making it highly job-oriented after 12th or graduation.' },
      { q: 'What is the duration of the Tally course?', a: 'The Tally Accounting course at SEMT is approximately 3 months with 100% practical training in Mohali.' },
      { q: 'What is included in the Tally course syllabus?', a: 'The syllabus covers accounting fundamentals, Tally Prime, vouchers, inventory, GST, TDS, payroll and financial reports.' },
      { q: 'Do I need an accounting background for the Tally course?', a: 'No. The course starts with accounting basics, so even beginners and non-commerce students can learn comfortably.' },
      { q: 'What jobs can I get after the Tally course in Mohali?', a: 'You can work as an accountant, Tally operator, accounts assistant or billing executive. SEMT provides placement assistance across the Tricity.' },
      { q: 'Does the course cover GST?', a: 'Yes. GST setup, invoicing, returns and input tax credit in Tally are covered in detail.' },
    ],
  },

  // ---------------------------------------------------------- Business Management
  'Diploma in Business Management': {
    overview:
      'The Diploma in Business Management in Mohali at SEMT builds the practical management skills employers value across every industry. You study management principles, marketing, finance & accounting, human resources, operations and business communication through case studies and real-world scenarios. Ideal for students after 12th, graduates and working professionals, this business management course in Mohali develops leadership, decision-making and corporate readiness. With a recognised certificate and placement assistance, graduates pursue roles as business analysts, operations executives, team leaders and managers across the Chandigarh Tricity, Punjab and beyond.',
    curriculum: [
      m(1, 'Principles of Management', ['Management functions', 'Planning & organising', 'Leadership basics']),
      m(2, 'Marketing Management', ['Marketing concepts', 'Sales & branding', 'Digital marketing basics']),
      m(3, 'Financial & Accounting Basics', ['Business finance', 'Accounting fundamentals', 'Budgeting']),
      m(4, 'Human Resource Management', ['Recruitment & training', 'Employee relations', 'Performance basics']),
      m(5, 'Operations & Business Communication', ['Operations basics', 'Business writing', 'Presentation skills']),
      m(6, 'Case Studies, Project & Certification', ['Real case studies', 'Management project', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is a business management diploma worth it?', a: 'Yes. A business management diploma builds versatile, in-demand skills in marketing, finance, HR and operations — valuable for students after 12th, graduates and working professionals.' },
      { q: 'What is the duration of the business management course?', a: 'The Diploma in Business Management at SEMT is approximately 6 months with case-study-based practical learning in Mohali.' },
      { q: 'What is the business management syllabus?', a: 'The syllabus covers management principles, marketing, finance, human resources, operations and business communication.' },
      { q: 'What jobs can I get after business management in Mohali?', a: 'You can work as a business analyst, operations executive, team leader or trainee manager across industries. SEMT provides placement assistance.' },
      { q: 'Who should do this management course?', a: 'Students after 12th, graduates and working professionals who want to build leadership and corporate skills.' },
      { q: 'Does the course include real case studies?', a: 'Yes. You learn through real business case studies and a management project for hands-on understanding.' },
    ],
  },

  // ---------------------------------------------------------- HR Management
  'Diploma in HR Management': {
    overview:
      'The Diploma in HR Management in Mohali at SEMT prepares you for a people-focused corporate career in human resources. You learn recruitment, onboarding, payroll, HR policies, employee engagement, performance management and labour law basics through practical, scenario-based training. Ideal for graduates and students who enjoy working with people, this HR management course in Mohali builds the exact skills companies look for in HR executives. With a recognised certificate and placement assistance, graduates pursue roles as HR executive, HR recruiter, payroll executive and HR generalist across the Chandigarh Tricity, Punjab and growing companies nationwide.',
    curriculum: [
      m(1, 'Introduction to HRM', ['Role of HR', 'HR functions', 'HR in organisations']),
      m(2, 'Recruitment & Selection', ['Sourcing & screening', 'Interviews & onboarding', 'Job descriptions']),
      m(3, 'Payroll & Compensation', ['Salary structure', 'Payroll processing', 'Statutory basics (PF/ESI)']),
      m(4, 'Performance & Engagement', ['Performance appraisal', 'Employee engagement', 'Training & development']),
      m(5, 'HR Policies & Labour Law Basics', ['HR policies', 'Workplace compliance', 'Labour law overview']),
      m(6, 'HR Software, Project & Certification', ['HRMS tools', 'HR project', 'Interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is HR a good career option?', a: 'Yes. HR is a stable, people-focused career in every company. With practical HR skills, graduates can quickly start as HR executives or recruiters.' },
      { q: 'What is the duration of the HR management course?', a: 'The Diploma in HR Management at SEMT is approximately 6 months with practical, scenario-based training in Mohali.' },
      { q: 'What is the HR course syllabus?', a: 'The syllabus covers recruitment, payroll, performance management, employee engagement, HR policies and labour law basics, plus HRMS tools.' },
      { q: 'What jobs can I get after HR management in Mohali?', a: 'You can work as an HR executive, recruiter, payroll executive or HR generalist. SEMT provides placement assistance across the Tricity.' },
      { q: 'Do I need a specific degree to join HR?', a: 'A graduation helps, but anyone with strong communication and interest in people can build an HR career through this course.' },
      { q: 'Does the course cover payroll and compliance?', a: 'Yes. Payroll processing and statutory basics like PF/ESI and labour law are covered.' },
    ],
  },

  // ---------------------------------------------------------------- PHP & MySQL
  'PHP & MYSQL': {
    overview:
      'The PHP & MySQL course in Mohali at SEMT makes you a job-ready backend / full-stack web developer. You learn PHP programming, MySQL databases, CRUD operations, sessions, security and building dynamic, database-driven websites and web applications through 100% practical, project-based training. Ideal for students after 12th, IT diploma holders and aspiring developers, this PHP MySQL course in Mohali helps you build real projects and a strong portfolio. With a recognised certificate and placement assistance, graduates work as PHP developers, web developers and backend developers across the Chandigarh Tricity, Punjab and the IT industry.',
    curriculum: [
      m(1, 'Web & PHP Foundations', ['How the web works', 'PHP syntax & variables', 'Control structures']),
      m(2, 'PHP Core Programming', ['Functions & arrays', 'Forms & validation', 'Sessions & cookies']),
      m(3, 'MySQL Database', ['Database design', 'SQL queries', 'Joins & relationships']),
      m(4, 'PHP + MySQL (CRUD)', ['Database connectivity', 'Create, read, update, delete', 'Search & pagination']),
      m(5, 'Security & Best Practices', ['Input validation', 'SQL injection prevention', 'Authentication']),
      m(6, 'Live Project & Certification', ['Build a dynamic web app', 'Hosting & deployment', 'Portfolio, interview prep & certificate']),
    ],
    faqs: [
      { q: 'Is PHP and MySQL still worth learning in 2026?', a: 'Yes. PHP and MySQL power a huge share of websites (including WordPress). It remains a practical, in-demand skill for backend and full-stack web development jobs.' },
      { q: 'What is the duration of the PHP & MySQL course?', a: 'The PHP & MySQL course at SEMT is approximately 3 months with 100% practical, project-based training in Mohali.' },
      { q: 'What is the PHP & MySQL syllabus?', a: 'The syllabus covers PHP programming, MySQL databases, CRUD operations, sessions, security and building a live dynamic web application.' },
      { q: 'Do I need prior programming knowledge?', a: 'Basic computer knowledge helps, but the course teaches PHP and MySQL from the fundamentals, so beginners can join.' },
      { q: 'What jobs can I get after the PHP course in Mohali?', a: 'You can work as a PHP developer, web developer or backend developer. SEMT provides placement assistance across the Tricity.' },
      { q: 'Will I build real projects in this course?', a: 'Yes. You build a complete, database-driven web application and portfolio during the course.' },
    ],
  },
};

export default courseContentOverrides;
