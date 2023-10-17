import axios from "axios";

interface PostPageProps {
  postId: string;
}

const Page = async ({ params }: { params: PostPageProps }) => {
  const postData = await axios.get(
    `http://localhost:3000/api/posts/${params.postId}`
  );

  return <div></div>;
};

export default Page;
