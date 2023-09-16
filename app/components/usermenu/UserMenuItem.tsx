import { IconType } from "react-icons";

interface UserMenuItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  label,
  href,
  icon,
  onClick,
}) => {
  return <div></div>;
};

export default UserMenuItem;
