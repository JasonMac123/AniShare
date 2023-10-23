import { NextResponse, NextRequest } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Not signed in");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error("Invalid Id");
    }

    const createLiked = await prisma.userLikedPosts.create({
      data: {
        B: user.id,
        A: postId,
      },
    });

    await prisma.notification.create({
      data: {
        body: "Someone liked your tweet!",
        userId: user.id,
      },
    });

    return NextResponse.json(createLiked);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { postId } = await request.json();
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Not signed in");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        likedIds: true,
      },
    });

    if (!post) {
      throw new Error("Invalid Id");
    }

    const deleteLiked = await prisma.userLikedPosts.delete({
      where: {
        A_B: {
          B: user.id,
          A: postId,
        },
      },
    });

    return NextResponse.json(true);
  } catch (error: any) {
    throw new Error(error);
  }
}
