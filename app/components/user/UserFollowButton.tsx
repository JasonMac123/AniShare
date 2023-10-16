"use client";

import axios from "axios";

import { useCallback } from "react";
import { toast } from "react-toastify";

import { SafeUser } from "@/app/types";

interface UserFollowButtonProps {
  currentUser: SafeUser;
  userId: string;
  username: string;
}

const UserFollowButton: React.FC<UserFollowButtonProps> = ({
  currentUser,
  userId,
  username,
}) => {
  const onFollow = useCallback(() => {
    axios
      .post("/api/follow", { userId })
      .then(() => {
        toast(`Followed ${username}`);
      })
      .catch((error) => {
        toast(error);
      });
  }, [userId, currentUser.following]);

  return <div></div>;
};

export default UserFollowButton;
