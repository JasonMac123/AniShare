import axios from "axios";

import Header from "@/app/components/Header";

interface UserViewPageProps {
  userId?: string;
}

const UserView = async ({ params }: { params: UserViewPageProps }) => {
  const userData = await axios.get(
    `http://localhost:3000/api/user/${params.userId}`
  );

  return (
    <>
      <Header label={userData.data.username} />
    </>
  );
};

export default UserView;
