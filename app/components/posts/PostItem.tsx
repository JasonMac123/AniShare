"use client";

import { SafePost, SafeUser } from "@/app/types";
import { toast } from "react-toastify";

import { useCallback, useMemo, useState } from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { formatDistanceToNowStrict } from "date-fns";

import useLogin from "../hooks/useLoginModal";

import Avatar from "../user/Avatar";
import Image from "next/image";
import axios from "axios";

interface PostItemProps {
  data: SafePost;
  user: SafeUser | null;
}

const PostItem: React.FC<PostItemProps> = ({ data, user }) => {
  const router = useRouter();
  const loginModal = useLogin();

  const [likeCount, setLikeCount] = useState(data.likedIds.length);

  const redirectUserPage = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${data.authorId}`);
    },
    [router, data.authorId]
  );

  const redirectPostPage = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/post/${data.id}`);
    },
    [router, data.id]
  );

  const dateSincePost = useMemo(() => {
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();

      if (!user) {
        loginModal.onOpen;
        return;
      }

      if (data.likedIds.some((item) => item.id === user.id)) {
        axios
          .delete("/api/like", { data: { postId: data.id } })
          .then(() => {
            toast(`Unliked ${data.body} post`);
            setLikeCount(likeCount - 1);
          })
          .catch((error) => {
            toast(error);
          });
        return;
      }

      axios
        .post("/api/like", { postId: data.id })
        .then(() => {
          toast(`Liked ${data.body} post`);
          setLikeCount(likeCount + 1);
        })
        .catch((error) => {
          toast(error);
        });
    },
    [data, user]
  );

  return (
    <div
      onClick={redirectPostPage}
      className="border-b-[1px] border-neutral-800 hover:bg-neutral-900 cursor-pointer transition p-8 py-4 space-y-2"
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar userId={data.authorId} userImage={data.author.profileImage} />
        <p
          className="text-white font-semibold cursor-pointer hover:underline"
          onClick={redirectUserPage}
        >
          @{data.author.username}
        </p>
        <span className="text-neutral-100 text-sm">{dateSincePost} ago</span>
      </div>
      {data.image ? (
        <div className="flex flex-col w-full">
          <div className="w-full">
            <Image
              alt="image associated with the post"
              src={data.image}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full min-w-[150px] min-h-[150px]"
            />
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      ) : (
        <div className="text-white mt-1">{data.body}</div>
      )}
      <div className="flex flex-row items-center mt-3 gap-10">
        <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-white">
          <AiOutlineMessage size={20} />
          <p>{data.comment?.length || 0}</p>
        </div>
        <div
          className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500"
          onClick={onLike}
        >
          <AiOutlineHeart size={20} />
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
