import axios from "axios";

import Header from "@/app/components/Header";
import UserCover from "@/app/components/user/UserCover";

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
      <UserCover userId={userData.data.id} user={userData.data} />
    </>
  );
};

export default UserView;
