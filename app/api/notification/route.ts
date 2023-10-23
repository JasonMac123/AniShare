import { NextApiRequest } from "next";

import prisma from "@/app/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const url = req.url;

    const userId = new URL(url!).searchParams.get("currentUser");

    if (!userId) {
      throw new Error("Invalid Id");
    }

    const notifications = await prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hasNotification: false,
      },
    });

    return NextResponse.json(notifications);
  } catch (error: any) {
    throw new Error(error);
  }
}
