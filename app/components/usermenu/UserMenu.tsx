import UserMenuLogo from "./UserMenuLogo";

const UserMenu = () => {
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
