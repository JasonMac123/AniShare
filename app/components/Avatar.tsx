"use client";

import { useCallback } from "react";

import { safeUser } from "../types";
import { useRouter } from "next/navigation";

interface AvatarProps {
  userId: string;
  user: safeUser;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
  user,
}) => {
  const router = useRouter();

  const handleClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return <div></div>;
};

export default Avatar;
