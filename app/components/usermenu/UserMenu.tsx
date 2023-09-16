import UserMenuLogo from "./UserMenuLogo";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
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
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];

  return (
    <div className="w-1/4 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <UserMenuLogo />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
