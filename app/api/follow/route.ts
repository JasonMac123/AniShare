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

    const updatedUserFollowing = await prisma.userFollows.create({
      data: { B: currentUser.id, A: userId },
    });

    return NextResponse.json(true);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function DELETE(request: NextRequest) {
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

    const deleteFollow = await prisma.userFollows.delete({
      where: { A_B: { B: currentUser.id, A: userId } },
    });

    return NextResponse.json(true);
  } catch (error: any) {
    throw new Error(error);
  }
}
