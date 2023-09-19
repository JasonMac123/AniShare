import UserMenuLogo from "./UserMenuLogo";
import UserMenuItem from "./UserMenuItem";
import UserMenuCreate from "./UserMenuCreate";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut, BiSolidMessage } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const UserMenu = () => {
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
    <div className="w-1/4 h-full pr-4 md:pr-6 bg-lightGray">
      <div className="flex flex-col items-end">
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
          <UserMenuItem onClick={() => {}} icon={BiLogOut} label="LogOut" />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
