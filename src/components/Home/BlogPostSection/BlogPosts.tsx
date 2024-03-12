import BlogItem from "./BlogItem";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import Slider from "react-slick";
import { ReactElement } from "react";
import classes from "./BlogPosts.module.css";
import { BlogType } from "../../context/BlogProvider";
import useBlogs from "../../hooks/useBlog";

type ResponseObj = {
  breakpoint: number;
  settings: {
    slidesToShow: number;
  };
};
type SettingTypes = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  nextArrow: ReactElement;
  prevArrow: ReactElement;
  responsive: ResponseObj[];
};

type CustomButtonPropsType = {
  onClick?: () => void;
};

export default function BlogPosts() {
  const { blogPosts } = useBlogs();

  const CustomNextArrow = ({ onClick }: CustomButtonPropsType) => (
    <button className={`${classes.slickNext}`} onClick={onClick}>
      <ArrowRight />
    </button>
  );

  const CustomPrevArrow = ({ onClick }: CustomButtonPropsType) => (
    <button className={`${classes.slickPrev}`} onClick={onClick}>
      <ArrowLeft />
    </button>
  );

  const settings: SettingTypes = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="fz-7-blogs pb-120 aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="fz-7-body fz-7-section-heading">
          <h2 className="fz-7-section-title">Latest Blog Post</h2>
          <p className="fz-7-section-descr">
            Using test items of real content and data in designs will help but
            there's no guarantee that every oddity
          </p>
          <div className="fz-6-blogs-slider-nav" id="fz-7-trending-products-slider-nav"></div>
        </div>

        <Slider
          {...settings}
          className="fz-7-trending-products-slider owl-carousel"
        >
          {" "}
          {blogPosts.map((blogPost: BlogType) => (
            <BlogItem key={blogPost.id} blogPost={blogPost} type="slider" />
          ))}
        </Slider>
      </div>
    </section>
  );
}
