import { NextApiRequest } from "next";
import prisma from "../../prisma/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { id, username, bio, profileImage, coverImage } = await req.json();

    if (!username) {
      throw new Error("Missing Fields");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username,
        bio,
        profileImage,
        coverImage,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (e: any) {
    throw new Error("Something went wrong!");
  }
}
