import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner1 from "./fz-7-banner-1.jpg"
import Button from "../../Button/Button";
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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

export default function Hero() {
  const settings: SettingTypes = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    arrows: false
  };
  return(
    <div className="fz-6-banner fz-7-banner">
      <Slider {...settings} className="fz-7-banner-slider owl-carousel fz-7-body">
        <div className="fz-6-banner-slide fz-7-banner-slide bg-default owl-item">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-6 col-md-8">
                <div className="fz-6-banner-txt">
                  <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
                  <Button text="Shop Now" link="/shop"/>
                </div>
              </div>

              <div className="col-lg-6 text-end">
                <img src={HeroBanner1} alt="product image" className="fz-7-banner-img"/>
              </div>
            </div>
          </div>
        </div>

        <div className="fz-6-banner-slide fz-7-banner-slide bg-default">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-6 col-md-8">
                <div className="fz-6-banner-txt">
                  <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
                  <Button text="Shop Now" link="/shop"/>
                </div>
              </div>

              <div className="col-lg-6 text-end">
                <img src={HeroBanner1} alt="product image" className="fz-7-banner-img"/>
              </div>
            </div>
          </div>
        </div>

        <div className="fz-6-banner-slide fz-7-banner-slide bg-default">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-6 col-md-8">
                <div className="fz-6-banner-txt">
                  <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
                  <Button text="Shop Now" link="/shop"/>
                </div>
              </div>

              <div className="col-lg-6 text-end">
                <img src={HeroBanner1} alt="product image" className="fz-7-banner-img"/>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="container fz-7-banner-socials-container">
        <div className="fz-6-banner-socials">
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
          </ul>
          <h6>Follow us</h6>
        </div>
      </div>
    </div>
  )
}