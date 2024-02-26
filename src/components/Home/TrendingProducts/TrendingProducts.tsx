import Slider from "react-slick";

type SettingTypes = {
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  autoplay: boolean,
  autoplaySpeed: number,
  arrows: boolean
}

export default function TrendingProducts() {
  const settings: SettingTypes = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };
  return (
    <section className="fz-7-trending-products py-120 fz-7-body" data-aos="fade-up">
      <div className="container">
        <div
          className="fz-6-products-heading d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end">
          <div className="fz-7-products-heading">
            <h2 className="fz-7-section-title">Trending Products</h2>
            <p className="fz-7-section-descr">Using test items of real content and data in designs will help</p>
          </div>

          <div className="fz-6-blogs-slider-nav" id="fz-7-trending-products-slider-nav"></div>
        </div>

        <Slider {...settings} className="fz-7-trending-products-slider owl-carousel">
          
        </Slider>
      </div>
    </section>
  )
}