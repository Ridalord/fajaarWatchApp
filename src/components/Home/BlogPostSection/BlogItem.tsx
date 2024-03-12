import { useEffect, useState } from "react";
import { BlogType } from "../../context/BlogProvider";
import useBlogs from "../../hooks/useBlog";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDownloadURL, getStorage, list, ref } from "@firebase/storage";

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
    // <div
    //   className={
    //     type === "slider" ? "col-11" : `col-lg-3 col-md-4 col-6 col-xxs-12`
    //   }
    // >

    //     <div className="fz-7-blog">
    //       <div className="fz-7-blog-img">
    //         <img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image" />
    //       </div>

    //       <span className="fz-7-blog-date">
    //         <span>15</span>Jan
    //       </span>
    //       <div className="fz-7-blog-txt">
    //         <h4 className="fz-7-blog-title">
    //           <a href="blog-details.html">{blogPosts.title}</a>
    //         </h4>
    //         <a href="blog-details.html" className="fz-7-blog-btn">
    //           Read More
    //         </a>
    //       </div>
    //     </div>

    // </div>

    <div
      className={
        type === "slider" ? "col-11" : `col-lg-3 col-md-4 col-6 col-xxs-12`
      }
    >
      <div className="fz-7-product">
        <div className="fz-7-product-img ">
          <div className="fz-7-product-img">
            <img
              src={imageUrls[blogPost.id]?.[0] || "#"}
              alt={blogPost.title}
            />
          </div>
        </div>
        <div className="fz-7-product-txt">
          <h6 className="fz-7-product-cat">{blogPost.category}</h6>
          <h4 className="fz-7-product-title">
            <a href="shop-details.html">{blogPost.title}</a>
          </h4>
          {/* <span className="fz-7-product-price">{blogPosts.createdAt}</span> */}
          <div className="fz-7-product-actions">
            <div className="right">
              <button type="button" className="fz-quick-view">
                {/* <i className="fa-light fa-eye"></i> */}
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


