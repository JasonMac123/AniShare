"use client";

import { safeUser } from "@/app/types";
import Avatar from "../Avatar";

interface FollowBarProps {
  users: safeUser[];
}

const FollowBar: React.FC<FollowBarProps> = ({ users }) => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-melon rounded-xl p-4">
        <h2 className="text-taupe text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: safeUser) => {
            return (
              <div key={user.id} className="flex flex-row gap-4">
                <Avatar />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
