"use client";

import { SafeComment } from "@/app/types";

interface CommentItemProp {
  data: SafeComment;
}

const CommentItem: React.FC<CommentItemProp> = ({ data }) => {
  return <div></div>;
};

export default CommentItem;
