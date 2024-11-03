import type { Metadata } from "next";
import "./globals.scss";
import ReduxProvider from "@/provider/ReduxProvider";
import { getServerSession } from "next-auth";
import SessionProvider from "@/provider/SessionProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
