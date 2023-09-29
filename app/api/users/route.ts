import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/app/prisma/prismadb";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (e: any) {
    throw new Error(e);
  }
}
