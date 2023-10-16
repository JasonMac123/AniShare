import { User, Post, Comment } from "@prisma/client";

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
};

export type SafeComment = Omit<Comment, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
