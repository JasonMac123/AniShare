import { SafeUser } from "@/app/types";
import { Notification } from "@prisma/client";

import { BiLogoInstagram } from "react-icons/bi";

interface NotificationFeedProps {
  notifications: Notification[];
  currentUser: SafeUser;
}

const NotificationFeed: React.FC<NotificationFeedProps> = ({
  notifications,
  currentUser,
}) => {
  if (notifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {notifications.map((notification) => {
        return (
          <div
            key={notification.id}
            className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800"
          >
            <BiLogoInstagram size={40} color="white" />
            <p className="text-white">{notification.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationFeed;
