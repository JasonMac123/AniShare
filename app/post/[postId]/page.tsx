import axios from "axios";

import { ImWarning } from "react-icons/im";

import getCurrentUser from "@/app/functions/getCurrentUser";

import Header from "@/app/components/Header";
import PostItem from "@/app/components/posts/PostItem";
import CommentForm from "@/app/components/input/CommentForm";
import CommentFeed from "@/app/components/comments/CommentFeed";

interface PostPageProps {
  postId: string;
}

const Page = async ({ params }: { params: PostPageProps }) => {
  const postData = await axios.get(
    `http://localhost:3000/api/posts/${params.postId}`
  );
  const currentUser = await getCurrentUser();

  if (!postData) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center justify-center">
          <ImWarning size={40} color="red" />
          <p>Sorry, could not fetch post</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header label="Tweet" />
      <PostItem data={postData.data} user={currentUser} />
      <CommentForm
        postId={params.postId}
        user={currentUser}
        authorId={postData.data.authorId}
      />
      <CommentFeed comments={postData.data.comment} />
    </>
  );
};

export default Page;
