import { Notification } from "@prisma/client";

import NotificationItem from "./NotificationItem";
import { SafeNotification } from "@/app/types";

interface NotificationFeedProps {
  notifications: SafeNotification[];
}

const NotificationFeed: React.FC<NotificationFeedProps> = ({
  notifications,
}) => {
  if (notifications.length === 0) {
    return (
      <div className="text-white text-center p-6 text-xl">No notifications</div>
    );
  }

  return (
    <div className="flex flex-col">
      {notifications.map((notification) => {
        return <NotificationItem data={notification} key={notification.id} />;
      })}
    </div>
  );
};

export default NotificationFeed;
