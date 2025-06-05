import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getAllBlogs() {
  const files = fs.readdirSync(contentDirectory);

  const blogs = files.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace(".md", ""),
    };
  });

  return blogs;
}
