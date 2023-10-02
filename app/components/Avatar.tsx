"use client";

import { safeUser } from "../types";

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
  return <div></div>;
};

export default Avatar;
