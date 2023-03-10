import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "learn next13",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 16, margin: 8 }}>
          <Link href="/" style={{ padding: "0 9px 0 0" }}>
            Hone
          </Link>
          <Link href="/post" style={{ padding: "0 9px 0 0" }}>
            Post
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
