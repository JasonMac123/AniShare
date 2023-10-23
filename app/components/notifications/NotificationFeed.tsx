import { SafeUser } from "@/app/types";
import { Notification } from "@prisma/client";

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

  return <></>;
};

export default NotificationFeed;
