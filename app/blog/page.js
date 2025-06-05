import React from "react";
import Cards from "@/components/Cards";
import { getAllBlogs } from "@/utils/utils";

const Blog = () => {
  const blogs = getAllBlogs();
  return (
    <div className="w-full mx-auto">
      <Cards blogs={blogs} />
    </div>
  );
};

export default Blog;
