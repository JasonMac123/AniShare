import { useRouter } from "next/router";

import { BiCommentAdd } from "react-icons/bi";

const UserMenuCreate = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-red-500 hover:bg-opacity-50 transition cursor-pointer">
        <BiCommentAdd size={28} color="red" />
      </div>
    </div>
  );
};

export default UserMenuCreate;
