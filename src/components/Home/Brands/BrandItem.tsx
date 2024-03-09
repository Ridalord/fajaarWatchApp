type PropsType = {
  brandName: string,
  brandImage: string
}
export default function BrandItem({brandImage, brandName}:PropsType) {
  return (
    <a href="shop.html" className="col-9">
      <img src={brandImage} alt={brandName} />
    </a>
  )
}