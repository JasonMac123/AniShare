import { NextResponse } from "next/server";

import prisma from "@/app/prisma/prismadb";
import getCurrentUser from "@/app/functions/getCurrentUser";

export async function GET(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
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

    const followedUserIds = currentUser.following.map((user) => user.id);
    const followedPosts = posts.filter((post) =>
      followedUserIds.includes(post.authorId)
    );

    return NextResponse.json(followedPosts);
  } catch (e: any) {
    throw new Error(e);
  }
}
