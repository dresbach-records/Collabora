import type { User, Company, ProfessionalProfile, Project } from './types';

export const users: User[] = [
  { id: 'user-1', username: 'alexdoe', email: 'alex.doe@example.com', avatarUrlId: 'profile-avatar-1', role: 'professional' },
  { id: 'user-2', username: 'innovatech', email: 'contact@innovatech.com', avatarUrlId: 'company-logo-1', role: 'company' },
  { id: 'user-3', username: 'bobross', email: 'bob.ross@example.com', avatarUrlId: 'profile-avatar-2', role: 'professional' },
  { id: 'user-4', username: 'designco', email: 'hello@design.co', avatarUrlId: 'company-logo-2', role: 'company' },
];

export const companies: Company[] = [
  {
    id: 'company-1',
    slug: 'innovatech',
    name: 'Innovatech Solutions',
    logoUrlId: 'company-logo-1',
    description: 'Innovatech Solutions is a forward-thinking technology company specializing in custom software development and cloud solutions. We help businesses scale through technology.',
    industry: 'Technology',
    website: 'https://innovatech.com',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    projectIds: ['proj-1'],
  },
  {
    id: 'company-2',
    slug: 'designco',
    name: 'DesignCo Creative',
    logoUrlId: 'company-logo-2',
    description: 'DesignCo is a full-service design agency that creates beautiful and effective branding, websites, and marketing materials.',
    industry: 'Design',
    website: 'https://design.co',
    stack: ['Figma', 'Adobe Creative Suite', 'Webflow'],
    projectIds: ['proj-2'],
  },
];

export const profiles: ProfessionalProfile[] = [
  {
    id: 'prof-1',
    userId: 'user-1',
    username: 'alexdoe',
    name: 'Alex Doe',
    headline: 'Senior Full-Stack Developer | React & Node.js Expert',
    bio: 'I am a passionate developer with over 8 years of experience building scalable web applications. I specialize in the MERN stack and love solving complex problems.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    tools: ['VS Code', 'Docker', 'Git', 'Jira'],
    categories: ['Development'],
    portfolio: [],
    isAvailable: true,
    rate: { min: 80, max: 120, unit: 'hour' },
  },
  {
    id: 'prof-2',
    userId: 'user-3',
    name: 'Bob Ross',
    username: 'bobross',
    headline: 'Creative UI/UX Designer & Branding Specialist',
    bio: 'With a keen eye for detail and a passion for user-centered design, I craft intuitive and engaging digital experiences. Let\'s make something beautiful together.',
    skills: ['UI/UX Design', 'Branding', 'Wireframing', 'Prototyping', 'User Research'],
    tools: ['Figma', 'Sketch', 'Adobe XD', 'Illustrator'],
    categories: ['Design'],
    portfolio: [],
    isAvailable: false,
    rate: { min: 4000, max: 8000, unit: 'project' },
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    companyId: 'company-1',
    title: 'Build a Real-Time Analytics Dashboard',
    category: 'Development',
    description: 'We are looking for an experienced developer to build a real-time analytics dashboard for our SaaS product. The ideal candidate will have strong experience with React and data visualization libraries.',
    skills: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    tools: ['Git', 'Jira'],
    budget: { min: 5000, max: 10000 },
    timeline: '1-2 Months',
    type: 'freelance',
    createdAt: '2024-05-20T10:00:00Z',
    thumbnailUrlId: 'project-thumb-1',
  },
  {
    id: 'proj-2',
    companyId: 'company-2',
    title: 'Rebrand and Redesign for a FinTech Startup',
    category: 'Design',
    description: 'We need a talented designer to lead a complete rebrand and website redesign for a promising FinTech startup. This includes a new logo, brand guidelines, and a fully responsive website UI.',
    skills: ['Branding', 'UI Design', 'UX Research', 'Logo Design'],
    tools: ['Figma', 'Illustrator'],
    budget: { min: 8000, max: 15000 },
    timeline: '2-3 Months',
    type: 'contract',
    createdAt: '2024-05-18T14:30:00Z',
    thumbnailUrlId: 'project-thumb-2',
  },
  {
    id: 'proj-3',
    companyId: 'company-1',
    title: 'Develop a Cross-Platform Mobile App',
    category: 'Development',
    description: 'Seeking a React Native developer to create a cross-platform mobile application for our e-commerce platform. The app should provide a seamless shopping experience for both iOS and Android users.',
    skills: ['React Native', 'Redux', 'REST APIs', 'Mobile Payments'],
    tools: ['Xcode', 'Android Studio', 'Git'],
    budget: { min: 15000, max: 25000 },
    timeline: '3-4 Months',
    type: 'contract',
    createdAt: '2024-05-15T09:00:00Z',
    thumbnailUrlId: 'project-thumb-3',
  }
];
