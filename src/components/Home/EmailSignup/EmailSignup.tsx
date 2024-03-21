import CTAImage from "./fz-7-cta-img.png"
import CTABgImage from "./fz-7-cta-img-bg.png"
import CTAWrapBg from "./fz-7-cta-bg.jpg"

export default function EmailSignup() {
  return (
    <section className="fz-7-cta pb-120" data-aos="fade-up" style={{ backgroundImage: `url(${CTAWrapBg})` }}>
      <div className="container">
        <div className="row gx-0 gy-5 justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-4">
            <div className="fz-7-cta-img" style={{backgroundImage: `url(${CTABgImage})`}}>
              <img src={CTAImage} alt=""/>
            </div>
          </div>

          <div className="col-xl-6 col-lg-7">
            <div className="fz-7-subs">
              <h2 className="fz-7-section-title">Sign Up For Farjaa Emails</h2>
              <p className="fz-7-section-descr">It only takes a second to be the first to find out about our latest news and
                promotions...</p>
              <form action="#" className="fz-6-subs-form fz-7-subs-form">
                <input type="email" name="email" id="fz-6-subs-mail" placeholder="Email adress..."/>
                  <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}