"use client";

import { useRouter } from "next/navigation";

import { GrMultimedia } from "react-icons/gr";

const SideBarLogo = () => {
  const router = useRouter();

  return (
    <div
      className="rounded-full h-20 w-20 p-4 flex items-center justify-center hover:bg-darkWhite cursor-pointer transition"
      onClick={() => {
        router.push("/");
      }}
    >
      <GrMultimedia size={40} className="text-white" />
    </div>
  );
};

export default SideBarLogo;
