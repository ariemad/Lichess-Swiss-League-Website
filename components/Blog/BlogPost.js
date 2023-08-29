import { borders, typography } from "@/style/style";
import { getPostsData } from "@/utils/posts";
import Image from "next/image";

function BlogPost({ last, blogID }) {
  let posts = getPostsData();
  let content;

  if (last) {
    content = posts[0];
  } else {
    content = posts.find((element) => blogID == element.data.id);
  }

  return (
    <section className={borders + " bg-white" + " mb-6 "}>
      {content.data.image ? (
        <Image
          src={`/images/blogimages${content.data.image}`}
          alt={`Image of ${content.data.title}`}
          width={1000}
          height={1000}
          className="w-full border-b border-b-black"
          href="/"
        />
      ) : (
        ""
      )}

      <h3 className={typography.headerBig + "text-center pt-4"}>
        {content.data.title}
      </h3>
      <h2 className={typography.header + "text-center py-2"}>
        {content.data.date}
      </h2>
      <div className="px-6">
        {content.content.split("\n").map((line, index) => {
          if (line == "") {
            return <br key={index}></br>;
          } else {
            return <p key={index}>{line}</p>;
          }
        })}
      </div>
    </section>
  );
}

export default BlogPost;
