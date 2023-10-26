"use client";

import { Notification } from "@prisma/client";
import { BiLogoInstagram } from "react-icons/bi";

interface NotificationItemProps {
  data: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ data }) => {
  return (
    <div className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800">
      <BiLogoInstagram size={40} color="white" />
      <p className="text-white">{data.body}</p>
    </div>
  );
};

export default NotificationItem;
