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
  onChange: (number: number) => void;
  value: number;
}

const UserFollowButton: React.FC<UserFollowButtonProps> = ({
  currentUser,
  userId,
  username,
  onChange,
  value,
}) => {
  const onFollow = useCallback(() => {
    if (currentUser.following.some((item) => item.id === userId)) {
      axios
        .delete("/api/follow", { data: { userId } })
        .then(() => {
          toast(`Unfollowed ${username}`);
          onChange(value - 1);
        })
        .catch((error) => {
          toast(error);
        });
      return;
    }

    axios
      .post("/api/follow", { userId })
      .then(() => {
        toast(`Followed ${username}`);
        onChange(value + 1);
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
