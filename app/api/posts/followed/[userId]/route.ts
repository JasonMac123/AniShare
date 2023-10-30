import { NextResponse } from "next/server";

import prisma from "@/app/prisma/prismadb";
import getCurrentUser from "@/app/functions/getCurrentUser";

interface getFollowedUsersPostsParams {
  userId?: string;
}

export async function GET(
  request: Request,
  { params }: { params: getFollowedUsersPostsParams }
) {
  try {
    const { userId } = params;

    if (!userId) {
      throw new Error("Invalid credentials");
    }

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        likedIds: true,
        comment: true,
      },
    });

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        following: true,
      },
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    const followedUserIds = user.following.map((user) => user.id);
    const followedPosts = posts.filter((post) =>
      followedUserIds.includes(post.authorId)
    );

    return NextResponse.json(followedPosts);
  } catch (e: any) {
    throw new Error(e);
  }
}
