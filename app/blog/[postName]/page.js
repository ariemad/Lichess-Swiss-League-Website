import BlogAccordion from "@/components/Blog/BlogAccordion";
import BlogPost from "@/components/Blog/BlogPost";
import { borders, linkStyle, main, typography } from "@/style/style";
import { getPostsMetaData } from "@/utils/posts";
import { useRouter } from "next/navigation";

function Blog({ params }) {
  const postsMetaData = getPostsMetaData();

  if (postsMetaData.find((metadata) => metadata.id == params.postName)) {
    console.log(true);
  } else {
    //Go to http://localhost:3000/blog
  }

  return (
    <main className={main} style={{ width: "1200px" }}>
      <div>
        <BlogAccordion></BlogAccordion>
      </div>
      <div className="col-start-2 col-span-2 ">
        <BlogPost last={true}></BlogPost>
      </div>
    </main>
  );
}

export default Blog;
