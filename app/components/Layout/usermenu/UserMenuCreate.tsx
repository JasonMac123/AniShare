import { useRouter } from "next/router";

import { BiCommentAdd } from "react-icons/bi";

const UserMenuCreate = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-red-500 hover:bg-opacity-50 transition cursor-pointer">
        <BiCommentAdd size={28} color="red" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full hover:bg-red-500 hover:bg-opacity-90 cursor-pointer transition">
        <BiCommentAdd size={28} color="red" className="hover:text-red-500" />
        <p className="hidden lg:block text-center font-semibold text-white hover:text-red-500 text-[20px]">
          Create
        </p>
      </div>
    </div>
  );
};

export default UserMenuCreate;
