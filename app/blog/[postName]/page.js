import BlogAccordion from "@/components/Blog/BlogAccordion";
import BlogPost from "@/components/Blog/BlogPost";
import { getPostsMetaData } from "@/utils/posts";
import { Fragment } from "react";

function Blog({ params }) {
  const postsMetaData = getPostsMetaData();

  let content;

  if (postsMetaData.find((metadata) => metadata.id == params.postName)) {
    content = <BlogPost last={false} blogID={params.postName}></BlogPost>;
  } else {
    content = <BlogPost last={true}></BlogPost>;
  }

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
        {content}
      </div>
    </Fragment>
  );
}

export default Blog;
