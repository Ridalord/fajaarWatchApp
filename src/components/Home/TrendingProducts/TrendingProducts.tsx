import Slider from "react-slick";
import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductsSection/ProductItem";
import { ProductType } from "../../context/ProductsProvider";
import classes from "./TrendingProducts.module.css"
import { ReactElement } from "react";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";



type ResponseObj = {
  breakpoint: number,
  settings: {
    slidesToShow: number
  }
}
type SettingTypes = {
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  autoplay: boolean,
  autoplaySpeed: number,
  arrows: boolean,
  nextArrow: ReactElement,
  prevArrow: ReactElement,
  responsive: ResponseObj[]
}

type CustomButtonPropsType = {
  onClick?: () => void,
} 

export default function TrendingProducts() {
  const { products } = useProducts()
  const CustomNextArrow = ({ onClick }: CustomButtonPropsType) => (
    <button
      className={`${classes.slickNext}`}
      onClick={onClick}
    >
      <ArrowRight/>
    </button>
  );

  const CustomPrevArrow = ({ onClick }: CustomButtonPropsType) => (
    <button
      className={`${classes.slickPrev}`}
      onClick={onClick}
    >
      <ArrowLeft/>
    </button>
  );

  const settings: SettingTypes = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <CustomNextArrow /> ,
    prevArrow: <CustomPrevArrow /> ,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  const filteredProducts: ProductType[] = products.filter(product => (product.price <= 300))
  return (
    <section className="fz-7-trending-products py-120 fz-7-body" data-aos="fade-up">
      <div className="container">
        <div
          className="fz-6-products-heading d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end">
          <div className="fz-7-products-heading">
            <h2 className="fz-7-section-title">Trending Products</h2>
            <p className="fz-7-section-descr">Discover the latest trends in our collection of premium products.</p>
          </div>

          <div className="fz-6-blogs-slider-nav" id="fz-7-trending-products-slider-nav"></div>
        </div>

        <Slider {...settings} className="fz-7-trending-products-slider owl-carousel">
          {filteredProducts.map((product: ProductType) => (
            <ProductItem key={product.id} product={product} type="slider" />
          ))}
        </Slider>
      </div>
    </section>
  )
}
