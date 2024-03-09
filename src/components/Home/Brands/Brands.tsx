import Slider from "react-slick"
import Brand1 from "./fz-7-brand-1.png"
import Brand2 from "./fz-7-brand-2.png"
import Brand3 from "./fz-7-brand-3.png"
import Brand4 from "./fz-7-brand-4.png"
import BrandItem from "./BrandItem"

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
  responsive: ResponseObj[],
}

type BrandType = {
  id: string,
  brandName: string,
  brandImage: string,
}

const BrandData: BrandType[] = [
  {
    id: "1",
    brandName: "Real Estate",
    brandImage: Brand1
  },
  {
    id: "2",
    brandName: "Clothing By Miller",
    brandImage: Brand2
  },
  {
    id: "3",
    brandName: "Nole Nole",
    brandImage: Brand3
  },
  {
    id: "4",
    brandName: "Bali Resort",
    brandImage: Brand4
  },
]

export default function Brands() {
  const settings: SettingTypes = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="fz-7-brands" data-aos="fade-up">
      <div className="container">
        <div className="fz-7-brands-bg">
          <div className="fz-7-brands-heading d-flex flex-column">
            <h2 className="fz-7-section-title fz-7-brands-title">Explore All New Brands</h2>
          </div>

          <div className="fz-7-brands-row">
            <Slider {...settings} className="fz-7-brands-slider">
              {BrandData.map((brand: BrandType) => (
                <BrandItem key={brand.id} brandImage={brand.brandImage} brandName={brand.brandName} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}