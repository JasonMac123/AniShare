"use client";

import Image from "next/image";
import Avatar from "../Avatar";

import { safeUser } from "../../types";

interface UserCoverProps {
  userId: string;
  user: safeUser;
}

const UserCover: React.FC<UserCoverProps> = ({ user }) => {
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {user.coverImage && (
          <Image
            src={user.coverImage}
            fill
            alt="User Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={user.id} isLarge hasBorder userImage={user.image} />
        </div>
      </div>
    </div>
  );
};
export default UserCover;
