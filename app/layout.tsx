import "./globals.css";

import axios from "axios";

import UserMenu from "./components/layout/usermenu/UserMenu";
import FollowBar from "./components/layout/FollowBar";
import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";
import EditModal from "./components/modal/EditModal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getCurrentUser from "./functions/getCurrentUser";

export const metadata = {
  title: "AniShare",
  description: "A place to meet other anime fans!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  const users = await axios.get(
    `http://localhost:3000/api/users?currentUser=${currentUser?.id}`
  );

  return (
    <html lang="en">
      <body className="bg-davyGray">
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {currentUser && <EditModal user={currentUser} />}
          <LoginModal />
          <RegisterModal />
          <div className="grid grid-cols-4 h-full mx-auto xl:w-2/3 lg:w-3/4 w-full">
            <UserMenu currentUser={currentUser} />
            <div className="w-full h-full col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
            </div>
            <FollowBar users={users.data} />
          </div>
        </div>
      </body>
    </html>
  );
}
