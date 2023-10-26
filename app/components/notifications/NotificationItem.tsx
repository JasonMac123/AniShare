"use client";

import { Notification } from "@prisma/client";
import { useRouter } from "next/navigation";
import { BiLogoInstagram } from "react-icons/bi";

interface NotificationItemProps {
  data: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ data }) => {
  const router = useRouter();

  const onClick = () => {
    if (data.type === "Post") {
      router.push(`/post/${data.reference}`);
    }

    if (data.type === "User") {
      router.push(`/users/${data.reference}`);
    }
  };

  return (
    <div
      className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800"
      onClick={onClick}
    >
      <BiLogoInstagram size={40} color="white" />
      <p className="text-white">{data.body}</p>
    </div>
  );
};

export default NotificationItem;
