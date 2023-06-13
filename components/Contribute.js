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
        <p>
          Please contact us via{" "}
          <Link className={linkStyle} href={links.mail}>
            email
          </Link>{" "}
          or on our{" "}
          <Link className={linkStyle} href={links.discord}>
            Discord
          </Link>
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
          <li>Swiss League Discord.</li>
        </ul>
        <p className="pt-4">
          Please share them on our{" "}
          <Link className={linkStyle} href={links.discord}>
            Discord
          </Link>
          .
        </p>
      </div>
      <div className={typography.header + "px-4 pt-8 pb-4 font-bold"}>
        Help development
      </div>
      <div className={typography.header + "px-4 pb-4"}>
        <p>
          Swiss League is an open-source project, and we appreciate any
          contributions.
        </p>
        <p>
          If you would like to get involved, please reach out to us via{" "}
          <Link className={linkStyle} href={links.mail}>
            email
          </Link>{" "}
          or on our{" "}
          <Link className={linkStyle} href={links.discord}>
            Discord
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Contribute;
