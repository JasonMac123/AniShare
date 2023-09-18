import { useRouter } from "next/router";
import { useCallback } from "react";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return <div></div>;
};

export default Header;
