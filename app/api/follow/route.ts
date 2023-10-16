import { NextResponse, NextRequest } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "@/app/functions/getCurrentUser";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("Invalid Id");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("Invalid following user Id");
    }

    let updatedFollowingIds = [...currentUser.following];
    updatedFollowingIds.push(user);

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        following: updatedFollowingIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    throw new Error(error);
  }
}
