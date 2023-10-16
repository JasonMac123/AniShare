"use client";

import axios from "axios";

import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";

import Button from "../input/Button";
import useEdit from "../hooks/useEditModal";
import { SafeUser } from "@/app/types";

interface UserBioProps {
  currentUser?: SafeUser | null;
  createdAt: string;
  username: string;
  bio: string;
  following: number;
  followers: number;
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({
  currentUser,
  createdAt,
  username,
  bio,
  following,
  followers,
  userId,
}) => {
  const newDate = useMemo(() => {
    return format(new Date(createdAt), "MMMM yyyy");
  }, [createdAt]);

  const editModal = useEdit();

  const onFollow = useCallback(() => {
    axios
      .post("/api/follow", { userId })
      .then(() => {
        toast(`Followed ${username}`);
      })
      .catch((error) => {
        toast(error);
      });
  }, [userId, currentUser]);

  console.log(currentUser);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={editModal.onOpen} />
        ) : (
          <Button onClick={onFollow} label="Follow" secondary />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">@{username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{bio}</p>
          <div className="flex flex-row items-center gap-2 mt-4 text-neutral-500">
            <BiCalendar size={24} /> <p> Joined {newDate}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">Following</p>
            <p className="text-white">{following}</p>
            <p className="text-white">Followers</p>
            <p className="text-white">{followers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
