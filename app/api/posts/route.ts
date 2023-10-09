import { NextResponse, NextRequest } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

export async function POST(request: NextRequest) {
  try {
    const user = getCurrentUser();
    const { body } = request.body;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts);
  } catch (error: any) {
    throw new Error(error);
  }
}
