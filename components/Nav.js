"use client";

import { links } from "@/style/links";
import { typography } from "@/style/style";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-24 w-full flex flex-row items-center pl-4 bg-zinc-200">
      <Link href={"/"} className="flex-none max-w-fit min-w-fit h-3/4 ">
        <Image
          priority
          src="/images/Logo-small.png"
          alt="Swiss League Logo"
          width={300}
          height={300}
          className="max-w-fit max-h-full"
          href="/"
        />
      </Link>
      {/* Above 1024 Pxs */}
      <div className="flex flex-row flex-1 max-lg:hidden">
        <Link href={"/player"}>
          <h3 className={typography.header}>Players</h3>
        </Link>
        <Link href={"/tournament"}>
          <h3 className={typography.header + "ml-8"}>Tournaments</h3>
        </Link>
        <Link href={"/blog"}>
          <h3 className={typography.header + "ml-8"}>Blog</h3>
        </Link>
        <Link href={"/contribute"}>
          <h3 className={typography.header + "ml-8"}>Contribute / Sponsor</h3>
        </Link>
      </div>
      {/* Below 1024 Pxs */}
      <div className="flex flex-row flex-1 justify-center lg:hidden">
        <div className="w-16 h-16" onClick={handleClick}>
          <Image
            className="w-full h-full"
            src="/svg/hamburguer.svg"
            alt="SVG Image"
            width={200}
            height={200}
          />
        </div>
        <div className="fixed w-screen h-screen inset-0 pointer-events-none overflow-hidden z-40">
          <div
            className={
              "w-full h-full flex flex-col items-center  pointer-events-auto transition-all bg-zinc-200" +
              (menuOpen ? "" : " translate-x-full")
            }
          >
            <div className="w-20 h-20 pt-4" onClick={handleClick}>
              <Image
                className="w-full h-full"
                src="/svg/close-md-svgrepo-com.svg"
                alt="SVG Image"
                width={200}
                height={200}
              />
            </div>
            <Link href={"/player"} onClick={handleClick}>
              <h3 className={typography.headerBig + " py-4 "}>Players</h3>
            </Link>
            <Link href={"/tournament"} onClick={handleClick}>
              <h3 className={typography.headerBig + " py-4 "}>Tournaments</h3>
            </Link>
            <Link href={"/blog"} onClick={handleClick}>
              <h3 className={typography.headerBig + " py-4 "}>Blog</h3>
            </Link>
            <Link href={"/contribute"} onClick={handleClick}>
              <h3 className={typography.headerBig + " py-4 "}>
                Contribute / Sponsor
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <Link
        href={links.lichess}
        className="flex-none max-w-fit min-w-fit h-2/4 aspect-square mx-8"
      >
        <Image
          src="/images/lichess.png"
          alt="Lichess Logo"
          width={300}
          height={300}
          className="h-full w-full"
        />
      </Link>
    </nav>
  );
}

export default Nav;
