"use client";

import { useMemo, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";

import { SafeUser } from "@/app/types";

import Button from "../input/Button";
import UserFollowButton from "./UserFollowButton";

import useEdit from "../hooks/useEditModal";
import useLogin from "../hooks/useLoginModal";

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
  const LoginModal = useLogin();

  const [followerCount, setFollowerCount] = useState(followers);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={editModal.onOpen} />
        ) : !currentUser ? (
          <Button secondary label="Follow" onClick={LoginModal.onOpen} />
        ) : (
          <UserFollowButton
            currentUser={currentUser}
            userId={userId}
            username={username}
            onChange={setFollowerCount}
            value={followerCount}
          />
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
            <p className="text-white">{followerCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
