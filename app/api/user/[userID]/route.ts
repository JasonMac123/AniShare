import { NextResponse } from "next/server";

import prisma from "@/app/prisma/prismadb";

interface getUserDetailsParams {
  userID?: string;
}

export async function GET(
  request: Request,
  { params }: { params: getUserDetailsParams }
) {
  try {
    const { userID } = params;

    const user = await prisma.user.findUnique({
      where: {
        id: userID,
      },
    });

    return NextResponse.json(user);
  } catch (e: any) {
    throw new Error(e);
  }
}
