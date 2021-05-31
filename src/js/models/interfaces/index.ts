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
  completed: boolean;
};

export type User = {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
};

export type Comment = {
  user: User;
  text: string;
};

export type Reaction = {
  type: 'LIKE' | 'LOVE';
  userId: number;
};

export type Post = {
  id: number;
  photoPath?: string;
  content?: string;
  timestamp: string;
  reactions: Reaction[];
  comments: Comment[];
  watch: number;
  peak?: Peak;
  user?: User;
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

export type Message = {
  senderId: number;
  content: string;
};
