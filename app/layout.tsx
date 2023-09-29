import "./globals.css";

import UserMenu from "./components/layout/usermenu/UserMenu";
import FollowBar from "./components/layout/FollowBar";
import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";

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

  return (
    <html lang="en">
      <body>
        <div className="h-screen bg-davyGray">
          <LoginModal />
          <RegisterModal />
          {/*Add light mode version */}
          <div className="grid grid-cols-4 h-full">
            <UserMenu currentUser={currentUser} />
            <div className="w-full col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
            </div>
            <FollowBar currentUser={currentUser} />
          </div>
        </div>
      </body>
    </html>
  );
}
