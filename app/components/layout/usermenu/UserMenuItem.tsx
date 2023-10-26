"use client";

import { SafeUser } from "@/app/types";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useLogin from "../../hooks/useLoginModal";

import { IconType } from "react-icons";
import { BsDot } from "react-icons/bs";

interface UserMenuItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  currentUser?: SafeUser | null;
  alert?: boolean | null;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  currentUser,
  alert,
}) => {
  const router = useRouter();
  const LoginModal = useLogin();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (href !== "/" && !currentUser) {
      LoginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center relative">
      <div className="rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-isabelline text-isabelline hover:text-taupe cursor-pointer lg:hidden">
        <Icon size={28} />
        {alert ? (
          <BsDot
            className="text-melon absolute top-[2px] left-[2px]"
            size={70}
          />
        ) : null}
      </div>
      <div className="hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-isabelline text-isabelline hover:text-taupe cursor-pointer">
        <Icon size={24} />
        <p className="hidden lg:block text-xl">{label}</p>
        {alert ? (
          <BsDot className="text-melon absolute top-1 right-40" size={70} />
        ) : null}
      </div>
    </div>
  );
};

export default UserMenuItem;
