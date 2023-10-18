import axios from "axios";

import getCurrentUser from "../functions/getCurrentUser";

import Header from "../components/Header";
import PostItem from "../components/posts/PostItem";
import Form from "../components/input/Form";

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
      <Form isComment user={currentUser} postId={postData.data.id} />
    </>
  );
};

export default Page;
