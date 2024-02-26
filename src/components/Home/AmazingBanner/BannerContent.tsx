import Button from "../../Button/Button";

type PropTypes = {
  bannerTitle: string,
  bannerPrice: number,
  bannerImage: string
}

export default function BannerContent({bannerPrice, bannerTitle, bannerImage}: PropTypes) {
  return (
    <div className="col-lg-6">
      <div className="fz-6-sub-banner fz-7-sub-banner">
        <div className="fz-6-sub-banner-txt">
          <h2 className="fz-6-sub-banner-title">{ bannerTitle }</h2>
          <h6 className="fz-7-sub-banner-price">${bannerPrice.toFixed(2)}</h6>
          <Button link="shop.html" text="Shop Now" type="" />
        </div>

        <div className="fz-6-sub-banner-img">
          <img src={bannerImage} alt="Banner image" />
        </div>
      </div>
    </div>
  )
}