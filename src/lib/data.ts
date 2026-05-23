import {
  Building2,
  Cloud,
  Globe,
  Gavel,
  Landmark,
  Layers,
  LayoutDashboard,
  Package,
  Server,
  Shield,
  Smartphone,
  Users,
  Workflow,
  Database,
  Atom,
  Code2,
  GitBranch,
  Braces,
  Apple,
  Store,
  type LucideIcon,
} from 'lucide-react';

export const siteConfig = {
  name: 'AionX IT Solutions',
  tagline: 'Engineering digital experiences that scale.',
  description:
    'PhilGEPS-accredited IT partner delivering LGU systems, fintech platforms, ride-hailing apps, and modern web experiences across Ilocos Sur and the Philippines.',
  email: 'adolfotristanjames@gmail.com',
  phone: '+63 927 432 0355',
  location: 'Vigan City, Ilocos Sur · Philippines',
  founder: 'Tristan James B. Adolfo',
  philgeps: {
    accredited: true,
    label: 'PhilGEPS Accredited',
    description:
      'Registered for government procurement — qualified to bid and deliver IT solutions for LGUs and national agencies.',
  },
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  gradient: string;
};

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    description:
      'Official LGU portals, startup sites, and high-performance Next.js platforms with SEO and accessibility built in.',
    icon: Globe,
    highlights: ['Next.js', 'LGU portals', 'SEO', 'Responsive'],
    gradient: 'from-cyan-500/20 to-blue-600/10',
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    description:
      'Production React Native & Expo apps — ride-hailing, fintech, food delivery, and government field tools on iOS & Android.',
    icon: Smartphone,
    highlights: ['React Native', 'Expo', 'FCM', 'App Store'],
    gradient: 'from-violet-500/20 to-fuchsia-600/10',
  },
  {
    id: 'systems',
    title: 'Government & Enterprise Systems',
    description:
      'Legislative, archiving, paperless session, jail management, and document tracking — digitizing manual LGU processes.',
    icon: Server,
    highlights: ['LGU SDLC', 'Compliance docs', 'Training', 'Reports'],
    gradient: 'from-emerald-500/20 to-teal-600/10',
  },
  {
    id: 'fintech',
    title: 'Fintech & Real-time Systems',
    description:
      'Loan management, wallets, disbursements, and payment integrations with secure Supabase RLS and financial RPC logic.',
    icon: Cloud,
    highlights: ['Supabase', 'Maya SDK', 'GraphQL', 'RLS'],
    gradient: 'from-violet-500/20 to-pink-500/10',
  },
  {
    id: 'business-operations',
    title: 'Business Operations & POS Systems',
    description:
      'Complete retail solutions with POS systems, inventory management, sales analytics, employee tracking, and multi-location synchronization for retail stores, restaurants, and service businesses.',
    icon: Store,
    highlights: ['POS Systems', 'Inventory', 'Analytics', 'Multi-location'],
    gradient: 'from-amber-500/20 to-orange-600/10',
  },
  {
    id: 'ui',
    title: 'UI/UX & Design',
    description:
      'Polished interfaces, design systems, and pitch-ready prototypes that match your brand and impress stakeholders.',
    icon: LayoutDashboard,
    highlights: ['Figma', 'Motion', 'Dark UI', '3D accents'],
    gradient: 'from-rose-500/20 to-pink-600/10',
  },
  {
    id: 'support',
    title: 'Maintenance & Support',
    description:
      'Post-deployment support, CI/CD, staging environments, and staff training for lasting LGU adoption.',
    icon: Shield,
    highlights: ['CI/CD', 'Documentation', 'Onboarding', 'SLA'],
    gradient: 'from-indigo-500/20 to-purple-600/10',
  },
];

export type Project = {
  id: string;
  title: string;
  client?: string;
  category: 'Web' | 'Mobile' | 'System' | 'Fintech' | 'LGU';
  description: string;
  tech: string[];
  href?: string;
  year?: string;
  featured?: boolean;
  lguHighlight?: boolean;
};

export const projects: Project[] = [
  {
    id: 'sinait-lgu',
    title: 'Municipality of Sinait — Official Website',
    client: 'Municipality of Sinait, Ilocos Sur',
    category: 'LGU',
    description:
      'Official municipal website for public services, announcements, and government information — responsive and accessible for constituents.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://www.sinait.gov.ph',
    year: '2022',
    featured: true,
    lguHighlight: true,
  },
  {
    id: 'santa-lgu',
    title: 'Municipality of Santa — LGU Digital Systems',
    client: 'Municipality of Santa, Ilocos Sur',
    category: 'LGU',
    description:
      'End-to-end LGU software solutions including document workflows, reporting, and operational tools — procured through government bidding channels.',
    tech: ['React Native', 'Firebase', 'Node.js', 'MySQL'],
    year: '2020–2024',
    featured: true,
    lguHighlight: true,
  },
  {
    id: 'laoag-lgu',
    title: 'City of Laoag — LGU IT Solutions',
    client: 'City of Laoag, Ilocos Norte',
    category: 'LGU',
    description:
      'Mobile and web systems for local government operations — requirements gathering, demos, deployment, and staff training with full SDLC delivery.',
    tech: ['React Native', 'Firebase', 'REST APIs'],
    year: '2020–2024',
    featured: true,
    lguHighlight: true,
  },
  {
    id: 'provincial-jail',
    title: 'Ilocos Sur Provincial Jail — Management System',
    client: 'Provincial Jail, Ilocos Sur',
    category: 'LGU',
    description:
      'Correctional facility management and tracking system improving record-keeping, reporting, and operational transparency for provincial detention services.',
    tech: ['C#', 'MySQL', 'WinForms', 'Reports'],
    year: '2022–2023',
    featured: true,
    lguHighlight: true,
  },
  {
    id: 'efund',
    title: 'eFund — Loan Application System',
    category: 'Fintech',
    description:
      'Full-featured fintech platform: loan applications, admin approval, bank & e-wallet disbursement, dynamic repayment schedules, partial payments, and balance tracking via Supabase RLS & RPC.',
    tech: ['React Native', 'Expo', 'Supabase', 'GraphQL', 'Zod'],
    year: '2026',
    featured: true,
  },
  {
    id: 'tachymove',
    title: 'TachyMove — Ride-Hailing Client App',
    category: 'Mobile',
    description:
      'Production ride-hailing with real-time driver matching, GPS tracking, route optimization, wallet, and PayMaya payments.',
    tech: ['React Native', 'Firebase', 'PayMaya', 'Maps API'],
    href: 'https://tachy.com.ph',
    year: '2024',
    featured: true,
  },
  {
    id: 'tachydriver',
    title: 'TachyDriver — Driver Companion App',
    category: 'Mobile',
    description:
      'Driver app for trip management, navigation, earnings, and real-time availability — synced with the TachyMove platform.',
    tech: ['React Native', 'Firebase', 'PayMaya'],
    href: 'https://tachy.com.ph',
    year: '2024',
  },
  {
    id: 'paperless',
    title: 'Paperless Legislative Session System',
    category: 'System',
    description:
      'Tablet-based legislative system with roll call automation, document viewing, PDF sharing, and annotations — reducing paper in session halls.',
    tech: ['React Native', 'Firebase'],
    year: '2023',
  },
  {
    id: 'leg-archive',
    title: 'Legislative Archiving System',
    category: 'System',
    description:
      'Desktop system for efficient storage, retrieval, and management of legislative documents.',
    tech: ['C# WinForms', 'MySQL'],
    year: '2022',
  },
  {
    id: 'leg-track',
    title: 'Legislative Management Tracking',
    category: 'System',
    description:
      'Workflow tracking and Crystal Reports for legislative processes and accountability.',
    tech: ['C# WinForms', 'MySQL', 'Crystal Reports'],
    year: '2023',
  },
  {
    id: 'xenora',
    title: 'Xenora PH — Startup Website',
    category: 'Web',
    description: 'Modern startup website with performance optimization and SEO using Next.js.',
    tech: ['Next.js', 'Tailwind CSS'],
    href: 'https://xenora-ph.com',
    year: '2025',
  },
  {
    id: 'tachy-web',
    title: 'Tachy.com.ph — Platform Website',
    category: 'Web',
    description:
      'Official TachyMove platform site focused on branding, onboarding, and performance.',
    tech: ['Next.js', 'Tailwind CSS'],
    href: 'https://tachy.com.ph',
    year: '2024',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery App (Startup)',
    category: 'Mobile',
    description:
      'Cross-platform food delivery with restaurant listings, orders, and real-time tracking.',
    tech: ['Flutter', 'Firebase'],
    year: '2021',
  },
  {
    id: 'service-marketplace',
    title: 'Service Provider Marketplace',
    category: 'Mobile',
    description:
      'Marketplace connecting users with local providers — job posting, booking, and live job tracking.',
    tech: ['React Native', 'Firebase'],
    year: '2025',
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  caption: string;
  span?: 'wide' | 'tall';
};

export const gallery: GalleryItem[] = [
  {
    id: 'pitch',
    src: '/images/gallery/pitch-herbal.png',
    title: 'Live project pitch',
    caption:
      'On-stage presentation and product demo — Herbal Plant system showcase with timed pitch format.',
    span: 'wide',
  },
  {
    id: 'founder',
    src: '/images/gallery/founder.png',
    title: 'Founder/Lead developer',
    caption:
      'Tristan James B. Adolfo — full-stack mobile & web, fintech, and LGU systems architect.',
    span: 'tall',
  },
  {
    id: 'team',
    src: '/images/gallery/team-event.png',
    title: 'AionX team',
    caption:
      'Core team at a professional tech event — building solutions across the Ilocos region.',
  },
  {
    id: 'hackathon-vigan',
    src: '/images/gallery/hackathon-vigan.png',
    title: 'Impact Hackathon — Champion',
    caption:
      "Champion, Impact Hackathon 2019 · Vigan Convention Center — world's largest hackathon attempt.",
    span: 'wide',
  },
  {
    id: 'hackathon-2050',
    src: '/images/gallery/hackathon-2050.png',
    title: 'Impact Hackathon 2050',
    caption: 'Top 8 finisher at Guinness World Record event · Impact Hub Manila, Makati 2019.',
  },
  {
    id: 'sti-codefest',
    src: '/images/gallery/sti-codefest.png',
    title: 'STI Tagisan ng Talino',
    caption: '1st Runner-up, CodeFest · STI Bulacan 2018 — national coding competition.',
  },
  {
    id: 'lgu-documentation',
    src: '/images/gallery/lgu-documentation.jpg',
    title: 'LGU Document Signing',
    caption:
      'Project documentation and agreement signing with LGU officials — ensuring compliance and project clarity.',
    span: 'wide',
  },
  {
    id: 'team-consultation',
    src: '/images/gallery/team-consultation.jpg',
    title: 'Team Consultation Meeting',
    caption:
      'Collaborative requirements gathering with stakeholders — aligning technical vision with client needs.',
  },
  {
    id: 'municipal-office',
    src: '/images/gallery/municipal-office.jpg',
    title: 'Municipal Office Implementation',
    caption:
      'On-site system deployment and testing at municipal government office — ensuring smooth operational integration.',
    span: 'wide',
  },
  {
    id: 'staff-training',
    src: '/images/gallery/staff-training.jpg',
    title: 'LGU Staff Training Session',
    caption:
      'Comprehensive training program for government employees — building system competency and digital literacy.',
  },
  {
    id: 'mayor-meeting',
    src: '/images/gallery/mayor-meeting.jpg',
    title: 'Mayor Consultation',
    caption:
      'Executive-level meeting with municipal mayor — presenting solutions and project outcomes.',
    span: 'tall',
  },
  {
    id: 'system-design-planning',
    src: '/images/gallery/system-design-planning.jpg',
    title: 'System Design & Technical Planning',
    caption:
      'Technical consultation and system architecture planning with stakeholders — designing scalable solutions.',
    span: 'wide',
  },
  {
    id: 'government-seminar',
    src: '/images/gallery/government-seminar.jpg',
    title: 'Governor Chavit Singson',
    caption:
      'Government officials and stakeholders seminar — knowledge sharing and digital transformation awareness.',
    span: 'wide',
  },
  {
    id: 'legislative-chamber-setup',
    src: '/images/gallery/legislative-chamber-setup.jpg',
    title: 'Paperless Legislative Chamber',
    caption:
      'Modern legislative hall setup for paperless session system implementation — digitizing government operations.',
    span: 'wide',
  },
  {
    id: 'foodex-operation',
    src: '/images/gallery/foodex-operation.jpg',
    title: 'Foodex Delivery Fleet Operations',
    caption:
      'Live food delivery logistics with operational fleet — real-world deployment of food delivery app infrastructure.',
    span: 'wide',
  },
  {
    id: 'team-coding-pandemic',
    src: '/images/gallery/team-coding-pandemic.jpg',
    title: 'Coding with the Team — Pandemic Days',
    caption:
      'Remote development during pandemic lockdowns — building solutions together while adapting to digital-first collaboration.',
    span: 'tall',
  },
  {
    id: 'tachymove-operations',
    src: '/images/gallery/tachymove-operations.jpg',
    title: 'TachyMove Fleet Operations',
    caption:
      'Live operations of TachyMove ride-hailing platform with delivery fleet — real-world service deployment.',
  },
];

export const achievements = [
  'Impact Hackathon Champion — Vigan 2019',
  'Top 8 — Impact Hackathon 2050 (Guinness event)',
  '1st Runner-up — STI CodeFest, Bulacan 2018',
  'Best Thesis — Mobile Application, STI Vigan 2020',
  'Primary LGU software contractor — Hackdogs 2020–2024',
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Workshops with LGU officials and stakeholders — requirements, compliance, and PhilGEPS-ready documentation.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Wireframes, UI kit, and interactive prototypes before development — aligned with bidding specs.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Agile sprints, CI/CD, staging, and weekly demos — React Native, Next.js, Supabase, or desktop as needed.',
    icon: Workflow,
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'Deployment, LGU staff training, technical handover, and ongoing support for adoption.',
    icon: Package,
  },
];

export const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '4', label: 'LGU highlights' },
  { value: 'PhilGEPS', label: 'Accredited' },
  { value: '24/7', label: 'Dev support' },
];

export const techStack = [
  { name: 'Next.js', icon: Atom },
  { name: 'React', icon: Atom },
  { name: 'React Native', icon: Atom },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Code2 },
  { name: 'NestJS', icon: Layers },
  { name: 'Supabase', icon: Database },
  { name: 'Firebase', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Electron', icon: Layers },
  { name: 'Git', icon: GitBranch },
  { name: 'C#', icon: Braces },
  { name: 'Swift', icon: Apple },
  { name: 'PayMaya', icon: Package },
];

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#lgu', label: 'LGU Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export const lguRegions = [
  { icon: Landmark, name: 'Municipality of Sinait', province: 'Ilocos Sur' },
  { icon: Building2, name: 'Municipality of Santa', province: 'Ilocos Sur' },
  { icon: Building2, name: 'City of Laoag', province: 'Ilocos Norte' },
  { icon: Gavel, name: 'Ilocos Sur Provincial Jail', province: 'Ilocos Sur' },
];
