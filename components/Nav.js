import { links } from "@/style/links";
import { typography } from "@/style/style";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="h-24 flex flex-row items-center pl-4 bg-zinc-200">
      <Link href={"/"} className="flex-none max-w-fit min-w-fit h-3/4 ">
        <Image
          src="/images/Logo-small.png"
          alt="Swiss League Logo"
          width={300}
          height={300}
          className="max-w-fit max-h-full"
          href="/"
        />
      </Link>
      <Link href={"/player"}>
        <h3 className={typography.header}>Players</h3>
      </Link>
      <Link href={"/tournament"}>
        <h3 className={typography.header + "pl-8"}>Tournaments</h3>
      </Link>
      <Link href={"/blog"}>
        <h3 className={typography.header + "pl-8"}>Blog</h3>
      </Link>
      <Link href={"/contribute"}>
        <h3 className={typography.header + "pl-8"}>Contribute / Sponsor</h3>
      </Link>
      <div className="flex-1"></div>
      <Link
        href={links.lichess}
        className="flex-none max-w-fit min-w-fit h-2/4 aspect-square mx-3"
      >
        <Image
          src="/images/lichess.png"
          alt="Lichess Logo"
          width={300}
          height={300}
          className="h-full w-full"
        />
      </Link>
      <Link
        href={links.discord}
        className="flex-none max-w-fit min-w-fit h-2/4 aspect-square mx-3"
      >
        <Image
          src="/images/discord.png"
          alt="Discord Logo"
          width={300}
          height={300}
          className="h-full w-full"
        />
      </Link>
    </nav>
  );
}

export default Nav;
