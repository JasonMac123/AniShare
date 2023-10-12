"use client";

import { SafePost } from "@/app/types";
import PostItem from "./PostItem";

interface PostFeedProps {
  posts: SafePost[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post: SafePost) => {
        <PostItem userId={post.authorId} key={post.id} data={post} />;
      })}
    </>
  );
};

export default PostFeed;
