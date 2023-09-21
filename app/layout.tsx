import "./globals.css";

import UserMenu from "./components/layout/usermenu/UserMenu";
import FollowBar from "./components/layout/FollowBar";
import Modal from "./components/Modal";

export const metadata = {
  title: "AniShare",
  description: "A place to meet other anime fans!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen bg-davyGray">
          <Modal isOpen title="Test" />
          {/*Add light mode version */}
          <div className="grid grid-cols-4 h-full">
            <UserMenu />
            <div className="w-full col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
            </div>
            <FollowBar />
          </div>
        </div>
      </body>
    </html>
  );
}
