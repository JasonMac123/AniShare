"use client";

import { SafeComment } from "@/app/types";

interface CommentFeedProps {
  comments: SafeComment[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        return <CommentItem key={comment.id} data={comment} />;
      })}
    </>
  );
};

export default CommentFeed;
