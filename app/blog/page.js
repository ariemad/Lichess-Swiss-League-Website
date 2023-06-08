import BlogAccordion from "@/components/Blog/BlogAccordion";
import BlogPost from "@/components/Blog/BlogPost";
import { borders, linkStyle, main, typography } from "@/style/style";

function Blog() {
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
