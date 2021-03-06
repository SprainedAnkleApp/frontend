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
  completionTime: number;
  statistics: Statistics;
};

export type Statistics = {
  time_average: number;
  completion_total: number;
  completion_first: PeakCompletion;
  time_fastest: PeakCompletion;
  completion_latest: PeakCompletion[];
};

export type User = {
  id: number;
  login?: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  friend?: boolean;
  backgroundPhoto: string;
};

export type Comment = {
  user: User;
  content: string;
};

export type Reaction = {
  type: 'LOVE';
  userId: number;
};

export type Post = {
  id: number;
  signedUrl?: string;
  content?: string;
  timestamp: string;
  reactions: Reaction[];
  comments: Comment[];
  watch: number;
  peak?: Peak;
  user?: User;
  latitude: number;
  longitude: number;
};

export type Achievement = {
  achievementTitle: string;
  completed: boolean;
  progress: number;
  toComplete: number;
  peakId: number;
};

export type PeakCompletion = {
  user: User;
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

export type ExtendedMessage = Message & {
  id: number;
};
