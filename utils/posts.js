const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const postsDirectory = path.join(process.cwd(), "blogposts");

function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const data = fileNames.map((file) => {
    const id = file.replace(/\.md$/, "");

    //Get md as string

    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //Parse data

    const matterResult = matter(fileContents);
    matterResult.data.id = id;

    return matterResult;
  });

  return data;
}

function getPostsMetaData() {
  const raw = getPostsData();

  let data = raw.map((post) => {
    return post.data;
  });

  data.sort((a, b) => (a.data > b.data ? 1 : -1));

  return data;
}

module.exports = { getPostsData, getPostsMetaData };
