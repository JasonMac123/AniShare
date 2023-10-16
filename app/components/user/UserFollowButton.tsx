"use client";

import { SafeUser } from "@/app/types";

interface UserFollowButtonProps {
  userFollowList: SafeUser[];
  userId: string;
}

const UserFollowButton: React.FC<UserFollowButtonProps> = ({
  userFollowList,
  userId,
}) => {
  return <div></div>;
};

export default UserFollowButton;
