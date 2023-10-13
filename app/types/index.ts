import { User, Post, Comment } from "@prisma/client";

export type safeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafePost = Omit<Post, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
  author: safeUser;
  comment: SafeComment[];
};

export type SafeComment = Omit<Comment, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
