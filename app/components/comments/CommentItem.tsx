"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { formatDistanceToNowStrict } from "date-fns";

import Avatar from "../user/Avatar";

import { SafeComment } from "@/app/types";

interface CommentItemProp {
  data: SafeComment;
}

const CommentItem: React.FC<CommentItemProp> = ({ data }) => {
  const router = useRouter();

  const [distanceToFromNow, setDistanceToFromNow] = useState(data.createdAt);

  const redirectUserPage = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
      return;
    },
    [router, data]
  );

  const newDate = useMemo(() => {
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  useEffect(() => {
    setDistanceToFromNow(newDate);
  });

  return (
    <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} userImage={data.user.profileImage} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-white font-semibold cursor-pointer"
              onClick={redirectUserPage}
            >
              @{data.user.username}
            </p>
            <span className="text-neutral-500 text-sm">
              {distanceToFromNow}
            </span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
