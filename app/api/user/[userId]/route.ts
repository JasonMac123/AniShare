import { NextResponse } from "next/server";

import prisma from "@/app/prisma/prismadb";

interface getUserDetailsParams {
  userId?: string;
}

export async function GET(
  request: Request,
  { params }: { params: getUserDetailsParams }
) {
  try {
    const { userId } = params;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        posts: true,
        followedBy: true,
        following: true,
      },
    });

    return NextResponse.json(user);
  } catch (e: any) {
    throw new Error(e);
  }
}
