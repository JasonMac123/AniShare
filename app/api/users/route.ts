import { NextApiRequest } from "next";

import prisma from "@/app/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const url = req.url;

    const currentUser = new URL(url!).searchParams.get("currentUser");

    if (!currentUser) {
      const users = await prisma.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json(users);
    }

    const withoutUser = await prisma.user.findMany({
      where: {
        NOT: {
          id: currentUser,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(withoutUser);
  } catch (e: any) {
    throw new Error(e);
  }
}
