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
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-isabelline cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-darkWhite cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-isabelline text-xl">{label}</p>
      </div>
    </div>
  );
};

export default UserMenuItem;
