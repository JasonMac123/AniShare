import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/app/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (e: any) {
    throw new Error(e);
  }
}
