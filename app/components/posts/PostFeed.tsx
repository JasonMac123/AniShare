"use client";

import { SafePost, safeUser } from "@/app/types";
import PostItem from "./PostItem";

interface PostFeedProps {
  posts: SafePost[];
  user: safeUser | null;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, user }) => {
  return (
    <>
      {posts.map((post: SafePost) => {
        return (
          <PostItem
            userId={post.authorId}
            key={post.id}
            data={post}
            user={user}
          />
        );
      })}
    </>
  );
};

export default PostFeed;
