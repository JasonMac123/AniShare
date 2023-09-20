"use client";

import { useRouter } from "next/navigation";

import { BiCommentAdd } from "react-icons/bi";

const UserMenuCreate = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-isabelline hover:bg-opacity-50 transition cursor-pointer">
        <BiCommentAdd size={28} color="white" />
      </div>
      <div className="hidden lg:flex px-4 py-2 gap-4 rounded-full items-center hover:bg-darkWhite cursor-pointer transition">
        <BiCommentAdd size={24} color="white" />
        <p className="hidden lg:block text-center font-semibold text-isabelline text-xl">
          Create
        </p>
      </div>
    </div>
  );
};

export default UserMenuCreate;
