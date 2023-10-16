"use client";

import { SafeUser } from "@/app/types";
import Avatar from "../user/Avatar";

interface FollowBarProps {
  users: SafeUser[];
}

const FollowBar: React.FC<FollowBarProps> = ({ users }) => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-melon rounded-xl p-4">
        <h2 className="text-taupe text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: SafeUser) => {
            return (
              <div key={user.id} className="flex flex-row gap-4">
                <Avatar userId={user.id} userImage={user.profileImage} />
                <div className="flex flex-col">
                  <p className="text-white font-semibold text-sm">
                    @{user.username}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
