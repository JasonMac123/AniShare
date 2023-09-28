import UserMenuLogo from "./UserMenuLogo";
import UserMenuItem from "./UserMenuItem";
import UserMenuCreate from "./UserMenuCreate";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut, BiSolidMessage } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { safeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: safeUser | null;
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
    },
    {
      label: "Messages",
      href: "/user/messages/123",
      icon: BiSolidMessage,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];

  return (
    <div className="w-full h-full md:pr-6 bg-lightGray">
      <div className="flex flex-col items-center">
        <div className="space-y-2 lg:w-[230px] mt-4">
          <UserMenuLogo />
          {userMenuItems.map((item) => (
            <UserMenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <UserMenuCreate />
          {currentUser && (
            <UserMenuItem onClick={() => {}} icon={BiLogOut} label="LogOut" />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
