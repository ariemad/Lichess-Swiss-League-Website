"use client";

import { links } from "@/style/links";
import { borders, linkStyle, typography } from "@/style/style";
import Link from "next/link";
import { Fragment } from "react";

function Contribute() {
  return (
    <div className={" bg-white h-max" + borders}>
      <div className={typography.headerBig + "text-center pt-5"}>
        How to contribute?
      </div>
      <div className={typography.header + "px-4 pt-8 pb-4 font-bold"}>
        Sponsor an Event
      </div>
      <div className={typography.header + "px-4"}>
        <p>
          If you are interested in sponsoring one of our events, we would love
          to hear from you.
        </p>
      </div>
      <div className={typography.header + "px-4 pt-8 pb-4 font-bold"}>
        Suggestions and ideas
      </div>
      <div className={typography.header + "px-4"}>
        Do you have any suggestion or ideas to improve:
        <ul className="list-disc px-6 pt-1">
          <li>How we organize our events;</li>
          <li>Swiss League Website;</li>
        </ul>
      </div>
      <div className={typography.header + "px-4 pt-8 pb-4 font-bold"}>
        Help development
      </div>
      <div className={typography.header + "px-4 pb-4"}>
        <p>
          Swiss League is an open-source project, and we appreciate any
          contributions.
        </p>
      </div>
      <div className={typography.headerBig + "text-center pt-5"}>Contacts</div>
      <div className={typography.header + "px-4 pt-8 pb-8 font-bold"}>
        <Link className={linkStyle} href={links.mail}>
          {links.mail.slice(7)}
        </Link>{" "}
        <br></br>
        <Link
          className={linkStyle}
          href={"https://lichess.org/forum/team-chess-swiss-league"}
        >
          Swiss League Forum on Lichess
        </Link>{" "}
      </div>
    </div>
  );
}

export default Contribute;
