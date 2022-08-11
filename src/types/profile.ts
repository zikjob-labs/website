import { State } from 'zustand';
import { ImageFile, ImageNFT } from './lukso';

export interface ArrangeOrder {
  boxName: string;
  order: number;
}

export interface Education {
  id?: number;
  school: {
    name: string;
    logo?: string;
  };
  major: string;
  start: {
    month: string;
    year: string;
  };
  end?: {
    month: string;
    year: string;
  };
  isVerified?: boolean;
  description?: string;
}

export interface Experience {
  id?: number;
  company: {
    name: string;
    logo?: string;
  };
  position?: string;
  start: {
    month: string;
    year: string;
  };
  end?: {
    month: string;
    year: string;
  };
  isVerified?: boolean;
  description?: string;
}

export interface Skill {
  name: string;
}

export interface Certificate {
  name: string;
  issueBy: string;
  issueDate?: Date;
}

export interface Achievement {
  name: string;
  src: string;
  createdAt: Date;
}

export interface Project {
  name: string;
  description?: string;
  image: {
    src: string;
  };
  members?: Array<string>;
  customers?: Array<string>;
}

export interface Static {
  name: string;
  value: number;
}

export interface Profile {
  avatar?: {
    src: string;
  };
  fullName?: string;
  headline?: string;
  isVerified?: boolean;
  isFreelancer?: boolean;
  canContact?: boolean;
  phone?: string;
  email?: string;
  gender?: string;
  country?: string;
  videoUrl?: string;
  industries?: string[];
  introduce?: string;
  totalFavorite?: number;
  totalShare?: number;
  value?: number;
  arrangeOrder?: ArrangeOrder[];
  education?: Education[];
  experiences?: Experience[];
  skills?: Skill[];
  certificates?: Certificate[];
  achievements?: Achievement[];
  projects?: Project[];
  portfolio?: {
    src: string;
  };
  statics?: Static[];
}

export interface ProfileState extends State {
  zikkieAddress: string;
  isLogged: boolean;
  profile?: Profile;
  setIsLogged: (isLogged: boolean) => void;
  setProfile: (updatedInfo?: Profile, callUpdate?: boolean) => Promise<void>;
  checkZikkie: (chainId: number) => Promise<void>;
  createZikkie: (chainId: number) => Promise<void>;
  loadZikkie: () => Promise<void>;
  updateZikkie: () => Promise<void>;
}

export interface ZikJobProfile {
  ZikJobProfile: {
    fullName?: string;
    headline?: string;
    isFreelancer?: boolean;
    canContact?: boolean;
    gender?: string;
    country?: string;
    videoUrl?: string;
    industries?: string[];
    introduce?: string;
    avatar?: (ImageFile | ImageNFT)[];
    education?: {
      school?: string;
      major?: string;
      startMonth?: string;
      startYear?: string;
      endMonth?: string;
      endYear?: string;
      description?: string;
      images?: (ImageFile | ImageNFT)[];
    }[];
    experiences?: {
      companyName?: string;
      position?: string;
      startMonth?: string;
      startYear?: string;
      endMonth?: string;
      endYear?: string;
      description?: string;
      images?: (ImageFile | ImageNFT)[];
    }[];
    skills?: string[];
  };
}

export interface MeResponse {
  name: string;
  address: string;
  zikkieAddress: string;
  email: string;
  emailVerifiedAt: Date;
  phone: string;
  data: string;
}
