import { NextPageContext } from "next";
import axios from "axios";

import Header from "../components/Header";

import getCurrentUser from "../functions/getCurrentUser";
import { SafeUser } from "../types";

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
  const notificationData = axios.get(
    `http://localhost:3000/api/notifications/${currentUser.id}`
  );

  return (
    <>
      <Header label="Notifications" />
    </>
  );
};

export default Notifications;
