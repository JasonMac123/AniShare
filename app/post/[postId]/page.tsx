import axios from "axios";

import getCurrentUser from "@/app/functions/getCurrentUser";

import Header from "@/app/components/Header";
import PostItem from "@/app/components/posts/PostItem";
import Form from "@/app/components/input/Form";

interface PostPageProps {
  postId: string;
}

const Page = async ({ params }: { params: PostPageProps }) => {
  const postData = await axios.get(
    `http://localhost:3000/api/posts/${params.postId}`
  );
  const currentUser = await getCurrentUser();

  if (!postData) {
    return <div className="flex justify-center items-center h-full"></div>;
  }

  return (
    <>
      <Header label="Tweet" />
      <PostItem data={postData.data} user={currentUser} />
      <CommentForm />
    </>
  );
};

export default Page;
