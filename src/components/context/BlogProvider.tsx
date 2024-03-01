import { collection, getDocs } from "@firebase/firestore";
import { ReactElement, createContext, useEffect, useState } from "react";
import { db } from "../../config/firebase";

export type BlogType = {
  id: string,
  title: string,
  category: string,
  createdAt: number,
  tags: string[],
  content: string[]
}

const initState: BlogType[] = [];

export type UseBlogContextType = {
  blogPosts: BlogType[];
};

const initContextState: UseBlogContextType = { blogPosts: initState };

const BlogPostsContext = createContext<UseBlogContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const BlogPostsProvider = ({ children }: ChildrenType): ReactElement => {
  const [blogPosts, setBlogPosts] = useState<BlogType[]>(initState);

  useEffect(() => {
    const fetchBlogPosts = async (): Promise<void> => {
      try {
        const blogsRef = collection(db, "BlogPosts");
        const snapshot = await getDocs(blogsRef);
        const fetchedBlogPosts: BlogType[] = snapshot.docs.map((doc) => {
          const blogData = doc.data();
          return {
            id: doc.id,
            title: blogData.title || "",
            category: blogData.category || "",
            createdAt: blogData.createdAt || 0,
            tags: blogData.tags || [],
            content: blogData.content || [],
          };
        });
        setBlogPosts(fetchedBlogPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <BlogPostsContext.Provider value={{ blogPosts }}>
      {children}
    </BlogPostsContext.Provider>
  );
}


export default BlogPostsContext

