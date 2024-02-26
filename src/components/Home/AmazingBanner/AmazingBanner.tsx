import SubBanner1 from "./fz-7-sub-banner-1.png"
import SubBanner2 from "./fz-7-sub-banner-2.png"

export default function AmazingBanner() {
  return (
    <section className="fz-7-sub-banners fz-7-body" data-aos="fade-up">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="fz-6-sub-banner fz-7-sub-banner">
              <div className="fz-6-sub-banner-txt">
                <h2 className="fz-6-sub-banner-title">Best Watch Collection</h2>
                <h6 className="fz-7-sub-banner-price">$100.00</h6>
                <a href="shop.html" className="fz-6-sub-banner-btn">Shop Now</a>
              </div>

              <div className="fz-6-sub-banner-img">
                <img src={SubBanner1} alt="Banner image"/>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="fz-6-sub-banner fz-7-sub-banner">
              <div className="fz-6-sub-banner-txt">
                <h2 className="fz-6-sub-banner-title">Amazing Smartwatch</h2>
                <h6 className="fz-7-sub-banner-price">$100.00</h6>
                <a href="shop.html" className="fz-6-sub-banner-btn">Shop Now</a>
              </div>

              <div className="fz-6-sub-banner-img">
                <img src={SubBanner2} alt="Banner image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}