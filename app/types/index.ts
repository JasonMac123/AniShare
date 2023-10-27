import { User, Post, Comment, Notification } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  following: User[];
  followedBy: User[];
};

export type SafePost = Omit<Post, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
  author: SafeUser;
  comment: SafeComment[];
  likedIds: User[];
};

export type SafeComment = Omit<Comment, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
  user: User;
};

export type SafeNotification = Omit<Notification, "createdAt"> & {
  createdAt: string;
};
