"use client";

import { safeUser } from "@/app/types";

interface FollowBarProps {
  currentUser?: safeUser | null;
}

const FollowBar: React.FC<FollowBarProps> = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-melon rounded-xl p-4">
        <h2 className="text-taupe text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4"></div>
      </div>
    </div>
  );
};

export default FollowBar;
