import { NextApiRequest } from "next";
import prisma from "../../prisma/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { id, bio, profileImage, coverImage } = await req.json();

    if (!id) {
      throw new Error("Missing user credentials");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
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
