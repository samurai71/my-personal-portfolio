import "./globals.css";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <TopNav />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
