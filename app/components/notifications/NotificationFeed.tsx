import { Notification } from "@prisma/client";

interface NotificationFeedProps {
  notifications: Notification[];
}

const NotificationFeed: React.FC<NotificationFeedProps> = ({
  notifications,
}) => {
  return <></>;
};

export default NotificationFeed;
