import { borders, typography } from "@/style/style";
import { getPostsMetaData } from "@/utils/posts";
import BlogMonth from "./BlogMonth";
import BlogYear from "./BlogYear";

function BlogAccordion() {
  const raw = getPostsMetaData();

  const addContent = (raw) => {
    /*   Process data.
  Example:
   {
  '2022': { '05': [ [title, id], [title, id] ], '06': [ [title, id] ] },
  '2023': { '06': [ [title, id] ] }
} */

    const data = raw.reduce((acc, meta) => {
      let year = meta.date.slice(0, 4);
      let month = meta.date.slice(5, 7);

      if (!acc.hasOwnProperty(year)) {
        acc[year] = {};
      }
      if (!acc[year].hasOwnProperty(month)) {
        acc[year][month] = [];
      }
      acc[year][month].push([meta.title, meta.id]);

      return acc;
    }, new Object());

    //Get content

    let content = [];

    let yearKeys = Object.keys(data).sort((a, b) => a - b);

    for (let i = 0; i < yearKeys.length; i++) {
      content.push(
        <BlogYear
          key={yearKeys[i]}
          time={yearKeys[i]}
          data={data[yearKeys[i]]}
        ></BlogYear>
      );
    }

    return content;
  };

  return (
    <div className={borders + "bg-white"}>
      <h3 className={typography.header + "text-center pt-4"}> Blog Archive </h3>
      <div>{addContent(raw)}</div>
    </div>
  );
}

export default BlogAccordion;
