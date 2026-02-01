export type User = {
  id: string;
  username: string;
  email: string;
  avatarUrlId: string;
  role: 'professional' | 'company';
};

export type ProfessionalProfile = {
  id: string;
  userId: string;
  username: string;
  name: string;
  headline: string;
  bio: string;
  skills: string[];
  tools: string[];
  categories: string[];
  portfolio: PortfolioItem[];
  isAvailable: boolean;
  rate?: {
    min: number;
    max: number;
    unit: 'hour' | 'project';
  };
};

export type PortfolioItem = {
  id: string;
  type: 'image' | 'video' | 'link';
  title: string;
  description: string;
  url: string;
  thumbnailUrlId?: string;
};

export type Company = {
  id: string;
  slug: string;
  name: string;
  logoUrlId: string;
  description: string;
  industry: string;
  website: string;
  stack: string[];
  projectIds: string[];
};

export type Project = {
  id: string;
  companyId: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  tools: string[];
  budget: {
    min: number;
    max: number;
  };
  timeline: string;
  type: 'freelance' | 'contract';
  createdAt: string;
  thumbnailUrlId: string;
};

export type Application = {
  id: string;
  projectId: string;
  professionalId: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
};
