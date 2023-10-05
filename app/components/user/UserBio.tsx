"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import Button from "../input/Button";

interface UserBioProps {
  currentUser?: string;
  createdAt: string;
}

const UserBio: React.FC<UserBioProps> = ({ currentUser, createdAt }) => {
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
    </div>
  );
};

export default UserBio;
