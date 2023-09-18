import "./globals.css";

import UserMenu from "./components/usermenu/UserMenu";
import FollowBar from "./components/FollowBar";

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
        <UserMenu />
        {children}
        <FollowBar />
      </body>
    </html>
  );
}
