"use client";

import { useCallback } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface AvatarProps {
  userId?: string;
  userImage?: string | null;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
  userImage,
}) => {
  const router = useRouter();

  const handleClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      if (!userId) {
        return;
      }

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={` rounded-full hover:opacity-90 transition relative
      ${hasBorder ? "border-4 border-black" : ""} 
      ${isLarge ? "h-32 w-32" : "h-12 w-12"} 
      ${userId ? "cursor-pointer" : ""}`}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        sizes="h-full w-full,"
        alt="Avatar"
        onClick={handleClick}
        src={userImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
