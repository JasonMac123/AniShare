"use client";

import { SafePost } from "@/app/types";

interface PostItemProps {
  userId: string;
  data: SafePost;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data }) => {
  return <div></div>;
};

export default PostItem;
