import Button from "../../Button/Button"


type PropTypes = {
  title: string,
  image: string
}

export default function HeroItem({title, image}: PropTypes) {
  return (
    <div className="fz-6-banner-slide fz-7-banner-slide bg-default owl-item">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-lg-6 col-md-8">
            <div className="fz-6-banner-txt">
              <h1 className="fz-6-banner-title">{title}</h1>
              <Button text="Shop Now" link="/shop" type="banner" />
            </div>
          </div>

          <div className="col-lg-6 text-end">
            <img src={image} alt="product image" className="fz-7-banner-img" />
          </div>
        </div>
      </div>
    </div>
  )
}