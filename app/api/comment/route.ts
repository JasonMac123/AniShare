import { NextResponse, NextRequest } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    const { body, postId } = await request.json();

    if (!user) {
      throw new Error("Not signed in");
    }

    const comment = await prisma.comment.create({
      data: {
        body: body,
        userId: user.id,
        postId: postId,
      },
    });

    return NextResponse.json(comment);
  } catch (error: any) {
    throw new Error(error);
  }
}
