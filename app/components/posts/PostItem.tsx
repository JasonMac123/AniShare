"use client";

import { SafePost } from "@/app/types";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNowStrict } from "date-fns";

import useLogin from "../hooks/useLoginModal";
import Avatar from "../user/Avatar";

interface PostItemProps {
  userId: string;
  data: SafePost;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data }) => {
  const router = useRouter();
  const loginModal = useLogin();

  const redirectUserPage = useCallback(() => {
    router.push(`/users/${data.authorId}`);
  }, [router, data.authorId]);

  const redirectPostPage = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const newDate = useMemo(() => {
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return (
    <div
      onClick={redirectPostPage}
      className="border-b-[1px] border-neutral-800 hover:bg-neutral-900 cursor-pointer transition"
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.authorId} userImage={data.author.profileImage} />
      </div>
    </div>
  );
};

export default PostItem;
