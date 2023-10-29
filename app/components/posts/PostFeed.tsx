"use client";

import { SafePost, SafeUser } from "@/app/types";
import PostItem from "./PostItem";

interface PostFeedProps {
  posts: SafePost[];
  user: SafeUser | null;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, user }) => {
  if (posts.length === 0) {
    return (
      <div className="text-white text-center p-6 text-xl">No notifications</div>
    );
  }

  return (
    <>
      {posts.map((post: SafePost) => {
        return <PostItem key={post.id} data={post} user={user} />;
      })}
    </>
  );
};

export default PostFeed;
