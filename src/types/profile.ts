import { State } from 'zustand';

export interface ArrangeOrder {
  boxName: string;
  order: number;
}

export interface Education {
  school: {
    name: string;
    logo: string;
  };
  major: string;
  start: Date;
  end: Date | null;
  isVerified: boolean;
  description: string;
}

export interface Experience {
  company: {
    name: string;
    logo: string;
  };
  start: Date;
  end: Date | null;
  isVerified: boolean;
  description: string;
}

export interface Skill {
  name: string;
  rate: number;
}

export interface Certificate {
  name: string;
  issueDate: Date;
}

export interface Achievement {
  name: string;
  src: string;
  createdAt: Date;
}

export interface Project {
  name: string;
  description: string;
  image: {
    src: string;
  };
  members: Array<string>;
  customers: Array<string>;
}

export interface Static {
  name: string;
  value: number;
}

export interface Profile {
  avatar?: {
    src: string;
  };
  name: string;
  headline?: string;
  isVerified?: boolean;
  isFreelancer?: boolean;
  canContact?: boolean;
  phone?: string;
  email?: string;
  gender?: string;
  country?: string;
  videoUrl?: string;
  industries?: Array<string>;
  description?: string;
  totalFavorite?: number;
  totalShare?: number;
  value?: number;
  arrangeOrder?: Array<ArrangeOrder>;
  education?: Array<Education>;
  experiences?: Array<Experience>;
  skills?: Array<Skill>;
  achievements?: Array<Achievement>;
  projects?: Array<Project>;
  portfolio?: {
    src: string;
  };
  statics?: Array<Static>;
}

export interface ProfileState extends State {
  profile?: Profile;
  setProfile: (updatedInfo?: Profile) => void;
}
