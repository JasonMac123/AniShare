import { NextResponse } from "next/server";

import prisma from "@/app/prisma/prismadb";

interface getPostDetailsParams {
  postId?: string;
}

export async function GET(
  request: Request,
  { params }: { params: getPostDetailsParams }
) {
  try {
    const { postId } = params;

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: true,
        likedIds: true,
        comment: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return NextResponse.json(post);
  } catch (e: any) {
    throw new Error(e);
  }
}
