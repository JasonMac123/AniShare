"use client";

import { useRouter } from "next/navigation";

import { BiLogoInstagram } from "react-icons/bi";

const SideBarLogo = () => {
  const router = useRouter();

  return (
    <div
      className="rounded-full h-20 w-20 p-4 flex items-center justify-center hover:bg-isabelline text-isabelline hover:text-black cursor-pointer transition"
      onClick={() => {
        router.push("/");
      }}
    >
      <BiLogoInstagram size={40} />
    </div>
  );
};

export default SideBarLogo;
