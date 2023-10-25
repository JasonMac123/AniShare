"use client";

import UserMenuLogo from "./UserMenuLogo";
import UserMenuItem from "./UserMenuItem";
import UserMenuCreate from "./UserMenuCreate";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogIn, BiLogOut, BiSolidMessage } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useLogin from "../../hooks/useLoginModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const userMenuItems = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Messages",
      href: "/user/messages/123",
      icon: BiSolidMessage,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
    },
  ];

  const loginModal = useLogin();

  return (
    <div className="w-full h-full md:pr-6 bg-lightGray">
      <div className="flex flex-col items-center">
        <div className="space-y-2 lg:w-[230px] mt-4">
          <UserMenuLogo />
          {userMenuItems.map((item) => (
            <UserMenuItem key={item.href} {...item} currentUser={currentUser} />
          ))}
          <UserMenuCreate />
          {currentUser ? (
            <UserMenuItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="LogOut"
              currentUser={currentUser}
            />
          ) : (
            <UserMenuItem
              onClick={loginModal.onOpen}
              label="Sign-in"
              icon={BiLogIn}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
