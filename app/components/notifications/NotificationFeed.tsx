import { SafeUser } from "@/app/types";
import { Notification } from "@prisma/client";

interface NotificationFeedProps {
  notifications: Notification[];
  currentUser: SafeUser;
}

const NotificationFeed: React.FC<NotificationFeedProps> = ({
  notifications,
}) => {
  return <></>;
};

export default NotificationFeed;
