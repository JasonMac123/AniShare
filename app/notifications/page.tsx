import { NextPageContext } from "next";
import Header from "../components/Header";
import getCurrentUser from "../functions/getCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const currentUser = getCurrentUser();

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

const Notifications = () => {
  return (
    <>
      <Header label="Notifications" />
    </>
  );
};

export default Notifications;
