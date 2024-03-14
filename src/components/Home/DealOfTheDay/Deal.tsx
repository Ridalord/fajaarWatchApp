import DealImage from "../../../assets/images/fz-7-flash-img.png";
// import BackgroundImg from "./fz-7-flash-bg.png"

export default function Deal() {
  return (
    <section
      className="fz-7-flash pb-120 aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="fz-7-body fz-7-flash-bg">
          <div className="row gy-4 align-items-center g-0">
            <div className="col-lg-6">
              <div className="fz-7-flash-txt">
                <h2 className="fz-7-section-title fz-7-flash-title">
                  Deals of The Day
                </h2>
                <p className="fz-7-flash-descr">
                  Are you ready to elevate your style game? Today's deal of the
                  day is perfect for those looking to add a touch of
                  sophistication to their ensemble.
                </p>
                <div className="fz-6-flash-countdown fz-7-flash-countdown syotimer">
                  <div className="syotimer__head"></div>
                  <div className="syotimer__body">
                    {/* <p style={{ fontSize: "1.2em" }}>
                    The countdown is finished!
                  </p> */}
                  </div>
                  <div className="syotimer__footer"></div>
                </div>
                <a href="#" className="fz-6-sub-banner-btn">
                  Shop Now
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="fz-7-flash-img">
                <img src={DealImage} alt="Product Image" />
                <span className="fz-7-flash-tag">₦95K</span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
