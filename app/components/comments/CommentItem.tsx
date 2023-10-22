"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import { SafeComment } from "@/app/types";
import { formatDistanceToNowStrict } from "date-fns";

interface CommentItemProp {
  data: SafeComment;
}

const CommentItem: React.FC<CommentItemProp> = ({ data }) => {
  const router = useRouter();

  const redirectUserPage = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
      return;
    },
    [router, data]
  );

  const newDate = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return <div></div>;
};

export default CommentItem;
