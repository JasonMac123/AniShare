"use client";

import { useRouter } from "next/navigation";

import { BiCommentAdd } from "react-icons/bi";

const UserMenuCreate = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-isabelline text-isabelline hover:text-taupe hover:bg-opacity-50 transition cursor-pointer">
        <BiCommentAdd size={28} />
      </div>
      <div className="hidden lg:flex p-4 gap-4 rounded-full items-center hover:bg-isabelline text-isabelline hover:text-taupe cursor-pointer">
        <BiCommentAdd size={24} />
        <p className="hidden lg:block text-center font-semibold text-xl">
          Create
        </p>
      </div>
    </div>
  );
};

export default UserMenuCreate;
