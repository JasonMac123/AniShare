import { NextResponse, NextRequest } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    const { body, image } = await request.json();

    if (!user) {
      throw new Error("Not signed in");
    }

    const post = await prisma.post.create({
      data: {
        body: body,
        image: image,
        authorId: user.id,
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        likedIds: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error: any) {
    throw new Error(error);
  }
}
