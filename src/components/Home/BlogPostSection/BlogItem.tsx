import { useEffect, useState } from "react";
import { BlogType } from "../../context/BlogProvider";
import useBlogs from "../../hooks/useBlog";
import { getDownloadURL, getStorage, list, ref } from "@firebase/storage";
import { getDatePart } from "../../../util/getDataPart";
type PropTypes = {
  blogPost: BlogType;
  type: string;
};

interface ImageUrls {
  [productId: string]: string[]; // Define an index signature for image URLs
}

export default function BlogItem({ blogPost, type }: PropTypes) {
  const { blogPosts } = useBlogs();

  const fetchProductImageUrls = (blogPostId: string) => {
    const storage = getStorage();
    const blogPostRef = ref(storage, `BlogPosts/${blogPostId}`);
    return list(blogPostRef)
      .then((items) => {
        const imagePromises = items.items.map((item) => {
          return getDownloadURL(item);
        });
        return Promise.all(imagePromises);
      })
      .catch((error) => {
        console.error("Error fetching product image URLs:", error);
        return [];
      });
  };

  const [imageUrls, setImageUrls] = useState<ImageUrls>({});

  useEffect(() => {
    const fetchImages = async () => {
      const urls: ImageUrls = {};
      for (const blogPost of blogPosts) {
        const urlsForProduct = await fetchProductImageUrls(blogPost.id);
        urls[blogPost.id] = urlsForProduct;
      }
      setImageUrls(urls);
    };
    fetchImages();
  }, [blogPosts]);

  return (
    <div
      className={
        type === "slider" ? "col-11" : `col-lg-3 col-md-4 col-6 col-xxs-12`
      }
    >
      <div className="position-relative">
        <div className="fz-7-blogs-slider owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div
                className="owl-item active"
                style={{ width: "460px", marginRight: "30px" }}
              >
                <div className="fz-7-blog">
                  <div className="fz-7-blog-img">
                    <img
                      src={imageUrls[blogPost.id]?.[0] || "#"}
                      alt={blogPost.title}
                    />
                  </div>

                  <span className="fz-7-blog-date">
                    <span>{getDatePart(blogPost.createdAt, "day")}</span>{" "}
                    {getDatePart(blogPost.createdAt, "month")}
                  </span>
                  <div className="fz-7-blog-txt">
                    <h4 className="fz-7-blog-title">
                      <a href="blog-details.html">{blogPost.title}</a>
                    </h4>
                    <a href="blog-details.html" className="fz-7-blog-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
