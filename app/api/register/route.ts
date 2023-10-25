import bcrypt from "bcrypt";
import prisma from "../../prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const duplicateUserEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (duplicateUserEmail) {
      return NextResponse.json("Duplicate Email");
    }

    const duplicateUserUserName = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (duplicateUserUserName) {
      return NextResponse.json("Duplicate UserName");
    }

    const user = await prisma.user.create({
      data: {
        email,
        username,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (e: any) {
    throw new Error(e);
  }
}
