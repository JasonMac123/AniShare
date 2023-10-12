import axios from "axios";

import Header from "./components/Header";
import Form from "./components/input/Form";
import PostFeed from "./components/posts/PostFeed";

import getCurrentUser from "./functions/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser();
  const posts = await axios.get("http://localhost:3000/api/posts");

  return (
    <>
      <Header label="Home" disableBack />
      <Form user={user} />
      <PostFeed posts={posts.data} />
    </>
  );
}
