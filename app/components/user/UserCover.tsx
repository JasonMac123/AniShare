"use client";

import Image from "next/image";
import Avatar from "./Avatar";

import { SafeUser } from "../../types";

interface UserCoverProps {
  userId: string;
  user: SafeUser;
}

const UserCover: React.FC<UserCoverProps> = ({ user }) => {
  return (
    <div>
      <div className="bg-silver h-44 relative">
        {user.coverImage && (
          <Image
            src={user.coverImage}
            fill
            alt="User Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar
            userId={user.id}
            isLarge
            hasBorder
            userImage={user.profileImage}
          />
        </div>
      </div>
    </div>
  );
};
export default UserCover;
