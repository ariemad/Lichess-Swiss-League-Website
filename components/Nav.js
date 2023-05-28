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
      <h3 className="text-xl pl-5">Players</h3>
      <h3 className="text-xl pl-8">Tournaments</h3>
      <h3 className="text-xl pl-8">Contact</h3>
      <h3 className="text-xl pl-8">Contribute</h3>
    </nav>
  );
}

export default Nav;
