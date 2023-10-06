import { NextApiRequest } from "next";
import prisma from "../../prisma/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(req: NextApiRequest) {
  try {
    const { id, name, username, bio, profileImage, coverImage } = req.body;

    if (!name || !username) {
      throw new Error("Missing Fields");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
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
