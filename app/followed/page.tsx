import axios from "axios";

import Header from "../components/Header";
import PostFeed from "../components/posts/PostFeed";

import getCurrentUser from "../functions/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser();
  const posts = await axios.get("http://localhost:3000/api/posts/followed");

  return (
    <>
      <Header label="Followed Users Posts" disableBack />
      <PostFeed posts={posts.data} user={user} />
    </>
  );
}
