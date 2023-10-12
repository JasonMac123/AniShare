"use client";

import { SafePost } from "@/app/types";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNowStrict } from "date-fns";

import useLogin from "../hooks/useLoginModal";

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

  return <div></div>;
};

export default PostItem;
