import { NextPageContext } from "next";
import axios from "axios";

import Header from "../components/Header";

import getCurrentUser from "../functions/getCurrentUser";
import { SafeUser } from "../types";
import NotificationFeed from "../components/notifications/NotificationFeed";

export async function getServerSideProps(context: NextPageContext) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      currentUser,
    },
  };
}

const Notifications = async ({ currentUser }: { currentUser: SafeUser }) => {
  const notificationData = await axios.get(
    `http://localhost:3000/api/notifications/${currentUser.id}`
  );

  return (
    <>
      <Header label="Notifications" />
      <NotificationFeed
        notifications={notificationData.data}
        currentUser={currentUser}
      />
    </>
  );
};

export default Notifications;
