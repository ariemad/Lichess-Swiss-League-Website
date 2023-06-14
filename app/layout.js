import "./globals.css";
import Nav from "../components/Nav";
import { Inter } from "next/font/google";
import { main } from "@/style/style";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swiss League",
  description: "Swiss League Website",
  manifest: "/icons/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        <main className={main} style={{ gridTemplateRows: "repeat(2, auto)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
