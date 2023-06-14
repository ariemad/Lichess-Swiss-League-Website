import BlogAccordion from "@/components/Blog/BlogAccordion";
import BlogPost from "@/components/Blog/BlogPost";
import { Fragment } from "react";

function Blog() {
  return (
    <Fragment>
      <div>
        <BlogAccordion></BlogAccordion>
      </div>
      <div
        className={
          "col-start-2 col-span-2 row-span-full" + " max-md:col-start-1"
        }
      >
        <BlogPost last={true}></BlogPost>
      </div>
    </Fragment>
  );
}

export default Blog;
