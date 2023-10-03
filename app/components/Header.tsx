"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  disableBack?: Boolean;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label, disableBack }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="p-5">
      <div className="flex flex-row items-center gap-2 text-isabelline">
        {disableBack && (
          <BiArrowBack
            onClick={handleBack}
            className="cursor-pointer hover:opacity-90 transition"
          />
        )}
        <h1 className="text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
