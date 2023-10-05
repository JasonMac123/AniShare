import axios from "axios";

import Header from "@/app/components/Header";
import UserCover from "@/app/components/user/UserCover";
import getCurrentUser from "@/app/functions/getCurrentUser";
import UserBio from "@/app/components/user/UserBio";

interface UserViewPageProps {
  userId?: string;
}

const UserView = async ({ params }: { params: UserViewPageProps }) => {
  const currrentUser = await getCurrentUser();
  const userData = await axios.get(
    `http://localhost:3000/api/user/${params.userId}`
  );

  return (
    <>
      <Header label={userData.data.username} />
      <UserCover userId={userData.data.id} user={userData.data} />
      <UserBio
        currentUser={currrentUser?.id}
        createdAt={userData.data.createdAt}
      />
    </>
  );
};

export default UserView;
