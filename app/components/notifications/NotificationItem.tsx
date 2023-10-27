"use client";

import { SafeNotification } from "@/app/types";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import { BiLogoInstagram } from "react-icons/bi";

interface NotificationItemProps {
  data: SafeNotification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ data }) => {
  const router = useRouter();

  const [distanceToFromNow, setDistanceToFromNow] = useState(data.createdAt);

  const onClick = () => {
    if (data.type === "Post") {
      router.push(`/post/${data.reference}`);
    }

    if (data.type === "User") {
      router.push(`/users/${data.reference}`);
    }
  };

  const newDate = useMemo(() => {
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  useEffect(() => {
    setDistanceToFromNow(newDate);
  });

  return (
    <div
      className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800 hover:neutral-900 cusrsor-pointer transition"
      onClick={onClick}
    >
      <BiLogoInstagram size={40} color="white" />
      <div>
        <p className="text-white">{distanceToFromNow}</p>
        <p className="text-white">{data.body}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
