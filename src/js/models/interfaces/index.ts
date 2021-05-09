export type Credentials = {
  login: string;
  password: string;
};

export type Peak = {
  id: string;
  height: number;
  mountainRange: string;
  region: string;
  about: string;
  photo: string;
  name: string;
};

export type User = {
  login: string;
  profilePhoto: string;
};

export type Comment = {
  text: string;
};

export type Post = {
  photoPath?: string;
  content?: string;
  timestamp: string;
  liked: number;
  comments: Comment[];
  watch: number;
};
