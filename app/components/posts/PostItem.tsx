"use client";

import { SafePost } from "@/app/types";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNowStrict } from "date-fns";

import useLogin from "../hooks/useLoginModal";
import Avatar from "../user/Avatar";
import Image from "next/image";

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

  const dateSincePost = useMemo(() => {
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return (
    <div
      onClick={redirectPostPage}
      className="border-b-[1px] border-neutral-800 hover:bg-neutral-900 cursor-pointer transition p-4"
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.authorId} userImage={data.author.profileImage} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={redirectUserPage}
            >
              @{data.author.username}
            </p>
            <span className="text-neutral-100 text-sm">
              {dateSincePost} ago
            </span>
          </div>
          {data.image ? (
            <div className="flex flex-col w-full">
              <div>
                <Image alt="image associated with the post" src={data.image} />
              </div>
              <div className="text-white mt-1">{data.body}</div>
            </div>
          ) : (
            <div className="text-white mt-1">{data.body}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
