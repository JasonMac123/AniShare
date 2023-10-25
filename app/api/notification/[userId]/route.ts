import { NextApiRequest } from "next";

import prisma from "@/app/prisma/prismadb";
import { NextResponse } from "next/server";

interface getUserNotificationParams {
  userId?: string;
}

export async function GET(
  req: NextApiRequest,
  { params }: { params: getUserNotificationParams }
) {
  try {
    const { userId } = params;

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
