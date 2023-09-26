import bcrypt from "bcrypt";
import prisma from "../../prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, username, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      username,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
