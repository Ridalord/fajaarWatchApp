import BannerContent from "./BannerContent"
import SubBanner1 from "./fz-7-sub-banner-1.png"
import SubBanner2 from "./fz-7-sub-banner-2.png"

export default function AmazingBanner() {
  return (
    <section className="fz-7-sub-banners fz-7-body" data-aos="fade-up">
      <div className="container">
        <div className="row g-4">
          <BannerContent bannerImage={SubBanner1} bannerPrice={100} bannerTitle="Best Watch Collection" />
          <BannerContent bannerImage={SubBanner2} bannerPrice={100} bannerTitle="Amazing Smartwatch" />
        </div>
      </div>
    </section>
  )
}