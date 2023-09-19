import "./globals.css";

import UserMenu from "./components/Layout/usermenu/UserMenu";
import FollowBar from "./components/Layout/FollowBar";

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
        <div className="h-screen bg-black">
          {/*Add light mode version */}
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <UserMenu />
              <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
