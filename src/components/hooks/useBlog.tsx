import { useContext } from "react";
import BlogPostsContext, { UseBlogContextType } from "../context/BlogProvider";

const useBlogs = (): UseBlogContextType => {
  return useContext(BlogPostsContext);
}

export default useBlogs;