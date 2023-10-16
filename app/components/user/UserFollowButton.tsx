"use client";

import axios from "axios";

import { useCallback } from "react";
import { toast } from "react-toastify";

import { SafeUser } from "@/app/types";

import Button from "../input/Button";

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
    if (currentUser.following.some((item) => item.id === userId)) {
      axios
        .delete("/api/follow", { data: { userId } })
        .then(() => {
          toast(`Unfollowed ${username}`);
        })
        .catch((error) => {
          toast(error);
        });
    }

    axios
      .post("/api/follow", { userId })
      .then(() => {
        toast(`Followed ${username}`);
      })
      .catch((error) => {
        toast(error);
      });
  }, [userId, currentUser.following]);

  if (currentUser.following.some((item) => item.id === userId)) {
    return <Button label="Unfollow" onClick={onFollow} />;
  }

  return <Button label="Follow" onClick={onFollow} />;
};

export default UserFollowButton;
