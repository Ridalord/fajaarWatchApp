import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fz7Banner from "./fz-7-banner-1.jpg"
import HeroItem from "./HeroItem";
import { ReactElement } from "react";



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

type SliderDetailsType = {
  title: string,
  image: string,
  id: number
}

type HeroDataType = SliderDetailsType[]

const HeroData: HeroDataType = [
  {
    id: 1,
    title: "Smart Watch",
    image: Fz7Banner
  },
  {
    id: 2,
    title: "Smart Watch",
    image: Fz7Banner
  },
  {
    id: 2,
    title: "Smart Watch",
    image: Fz7Banner
  },
]

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
        {HeroData.map((item: SliderDetailsType): ReactElement => (
          <HeroItem image={item.image} title={item.title} key={item.id} />
        ))}

        
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