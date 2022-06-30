export interface LinkProfile {
  title: string;
  url: string;
}

export interface AvatarProfile {
  hashFunction: 'keccak256(bytes)';
  hash: string;
  url: string;
  fileType: string;
}

export interface ImageFile {
  width: number;
  height: number;
  hashFunction: 'keccak256(bytes)';
  hash: string;
  url: string;
}

export interface ImageNFT {
  address: string;
  tokenId: string;
}

export interface LSP3Profile {
  name: string;
  description?: string;
  links?: LinkProfile[];
  tags?: string[];
  avatar?: AvatarProfile[];
  profileImage?: (ImageFile | ImageNFT)[];
  backgroundImage?: (ImageFile | ImageNFT)[];
}
