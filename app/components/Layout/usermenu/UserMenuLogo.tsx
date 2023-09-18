import { useRouter } from "next/router";

import { GrMultimedia } from "react-icons/gr";

const SideBarLogo = () => {
  const router = useRouter();

  return (
    <div
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-red-400 hover:bg-opacity-10 cursor-pointer transition"
      onClick={() => {
        router.push("/");
      }}
    >
      <GrMultimedia size={28} color="white" />
    </div>
  );
};

export default SideBarLogo;
