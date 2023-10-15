import { NextResponse, NextRequest } from "next/server";

import prisma from "../../../../prisma/prismadb";

export async function GET(request: NextRequest, context: any) {
  try {
    const { userId } = context.params.userId;

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        authorId: userId,
      },
      include: {
        comment: true,
        author: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error: any) {
    throw new Error(error);
  }
}
