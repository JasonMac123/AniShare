"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return <div></div>;
};

export default Header;
