"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import Button from "../input/Button";
import { BiCalendar } from "react-icons/bi";

interface UserBioProps {
  currentUser?: string;
  createdAt: string;
  username: string;
  bio: string;
}

const UserBio: React.FC<UserBioProps> = ({
  currentUser,
  createdAt,
  username,
  bio,
}) => {
  const newDate = useMemo(() => {
    return format(new Date(createdAt), "MMMM yyyy");
  }, [createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser ? (
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          <Button onClick={() => {}} label="Follow" secondary />
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
      </div>
    </div>
  );
};

export default UserBio;
