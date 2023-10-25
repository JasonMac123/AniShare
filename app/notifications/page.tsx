import axios from "axios";

import { redirect } from "next/navigation";
import { toast } from "react-toastify";

import Header from "../components/Header";
import NotificationFeed from "../components/notifications/NotificationFeed";

import getCurrentUser from "../functions/getCurrentUser";

const Notifications = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    toast("You must be logged in to see this page");
    redirect("/");
  }

  const notificationData = await axios.get(
    `http://localhost:3000/api/notification/${currentUser.id}`
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
