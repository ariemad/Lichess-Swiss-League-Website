"use client";

import { arrowRight } from "@/style/style";
import BlogMonth from "./BlogMonth";
import { useState } from "react";

function BlogYear({ time, data }) {
  const [hidden, setHidden] = useState(true);

  let content = [];

  let monthKeys = Object.keys(data).sort((a, b) => a - b);
  for (let i = 0; i < monthKeys.length; i++) {
    const monthId = monthKeys[i];
    content.push(
      <BlogMonth
        key={`${time}-${monthId}`}
        time={monthKeys[i]}
        data={data[monthKeys[i]]}
      ></BlogMonth>
    );
  }

  const changeHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="pt-2 pl-4">
      <div className="flex items-center" onClick={changeHidden}>
        <div className={arrowRight + (hidden ? "" : " rotate-90")}></div>
        <div className="pl-2">{time}</div>
      </div>
      <div className={"pl-4 " + (hidden ? "hidden" : "")}>{content}</div>
    </div>
  );
}

export default BlogYear;
