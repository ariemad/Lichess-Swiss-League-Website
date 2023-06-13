"use client";

import { arrowRight, linkStyle } from "@/style/style";
import Link from "next/link";
import { useState } from "react";

function BlogMonth({ time, data }) {
  const [hidden, setHidden] = useState(true);
  let content = [];

  for (let i = 0; i < data.length; i++) {
    content.push(
      <Link key={data[i][1]} className={linkStyle} href={`blog/${data[i][1]}`}>
        <p className="pl-2">{data[i][0]}</p>
      </Link>
    );
  }
  const monthMap = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const changeHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className=" pl-2">
      <div className="flex items-center" onClick={changeHidden}>
        <div className={arrowRight + (hidden ? "" : " rotate-90")}></div>
        <div className="pl-2">{monthMap[time]}</div>
      </div>
      <div className={"pl-4 " + (hidden ? " hidden" : "")}>{content}</div>
    </div>
  );
}

export default BlogMonth;
