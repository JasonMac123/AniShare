import { NextResponse, NextRequest } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    const { body, postId, authorId } = await request.json();

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

    await prisma.notification.create({
      data: {
        body: "Somone has commented on your post",
        userId: authorId,
      },
    });

    await prisma.user.update({
      where: {
        id: authorId,
      },
      data: {
        hasNotification: true,
      },
    });

    return NextResponse.json(comment);
  } catch (error: any) {
    throw new Error(error);
  }
}
