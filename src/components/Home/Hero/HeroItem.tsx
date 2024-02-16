import HeroBanner1 from "./fz-7-banner-1.jpg"


export default function HeroItem() {
  return (
    <div className="fz-6-banner-slide fz-7-banner-slide bg-default owl-item">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-lg-6 col-md-8">
            <div className="fz-6-banner-txt">
              <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
              <a href="#" className="fz-6-banner-btn fz-6-sub-banner-btn">Shop Now</a>
            </div>
          </div>

          <div className="col-lg-6 text-end">
            <img src={HeroBanner1} alt="product image" className="fz-7-banner-img" />
          </div>
        </div>
      </div>
    </div>
  )
}