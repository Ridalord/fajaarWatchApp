import { Link } from "react-router-dom";

type PropTypes = {
  text: string,
  link: string,
  type: string
}

export default function Button({ text, link, type }: PropTypes) {
  return (
    type === 'banner' ? (
      <Link to={link} className="fz-6-banner-btn fz-6-sub-banner-btn">{text}</Link>
    ) : (
        <Link to={link} className="fz-1-banner-btn update-cart-btn">{text}</Link>
    )
  );
}
