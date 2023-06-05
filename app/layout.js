import "./globals.css";
import Nav from "../components/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swiss League",
  description: "Swiss League Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
