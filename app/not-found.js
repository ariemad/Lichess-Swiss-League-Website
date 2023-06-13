"use client";

import { borders, linkStyle, main, typography } from "@/style/style";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className={main} style={{ width: "1200px" }}>
      <div className="col-start-2 col-span-2">
        <div className={borders + "p-4"}>
          <h2 className={typography.headerBig + "text-center pb-4"}>
            Error 404
          </h2>
          <p className={typography.paragraph + " text-center"}>
            The page was not found. Please inform us of the error at:{" "}
          </p>
          <p className={linkStyle + " text-center"}>
            <Link href={"lichess_swiss_league@hotmail.com"}>
              lichess_swiss_league@hotmail.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
