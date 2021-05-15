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
  latitude: number;
  longitude: number;
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

export type Friend = {
  id: number;
  firstName: string;
  lastName: string;
  profilePhoto: string;
};

export type Achievement = {
  name: string;
  progress: number;
};

export type PeakCompletion = {
  id: {
    userId: number;
    peakId: number;
  };
  completionTime: string;
};
