// import { useEffect, useState } from "react";
import { BlogType } from "../../context/BlogProvider";
// import useBlogs from "../../hooks/useBlog";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropTypes = {
  blogPosts: BlogType;
  type: string;
};

export default function BlogItem({ blogPosts, type }: PropTypes) {
  //   const { blogs } = useBlogs();

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


    <div className={type==="slider"? 'col-11':`col-lg-3 col-md-4 col-6 col-xxs-12`}>
      <div className="fz-7-product">
        <div className="fz-7-product-img bg-ImageColor">
          
        </div>
        <div className="fz-7-product-txt">
          <h6 className="fz-7-product-cat">{blogPosts.category}</h6>
          <h4 className="fz-7-product-title">
            <a href="shop-details.html">{blogPosts.title}</a>
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

{/* <div class="container"><div class="fz-7-body fz-7-section-heading"><h2 class="fz-7-section-title">Latest Blog Post</h2><p class="fz-7-section-descr">Using test items of real content and data in designs will help but there's no guarantee that every oddity</p><div class="fz-6-blogs-slider-nav" id="fz-7-trending-products-slider-nav"></div></div><div class="slick-slider fz-7-trending-products-slider owl-carousel slick-initialized" dir="ltr"><button class="_slickPrev_11pyh_1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg></button><div class="slick-list"><div class="slick-track" style="width: 4320px; opacity: 1; transform: translate3d(-1440px, 0px, 0px);"><div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="2" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div><div data-index="5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 480px;"><div><div class="col-11"><div class="fz-7-blog"><div class="fz-7-blog-img"><img src="assets/images/fz-7-blog-3.jpg" alt="Blog Image"></div><span class="fz-7-blog-date"><span>15</span>Jan</span><div class="fz-7-blog-txt"><h4 class="fz-7-blog-title"><a href="blog-details.html">An electronic product is a device that uses electricity to perform a function</a></h4><a href="blog-details.html" class="fz-7-blog-btn">Read More</a></div></div></div></div></div></div></div><button class="_slickNext_11pyh_3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></button></div></div> */}