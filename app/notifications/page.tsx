import axios from "axios";

import Header from "../components/Header";
import NotificationFeed from "../components/notifications/NotificationFeed";

import getCurrentUser from "../functions/getCurrentUser";

const Notifications = async () => {
  const currentUser = await getCurrentUser();
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
