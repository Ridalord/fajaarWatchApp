import { Link } from "react-router-dom";

type PropTypes = {
  page: string,
  productName?: string
}
export default function Breadcrumbs({ page, productName }: PropTypes) {
  let breadcrumbHeader: string = '';
  let pageName: string = ''

  switch (page) {
    case "shop":
      breadcrumbHeader = "Shop Page";
      pageName = "Products"
      break;
    case "about":
      breadcrumbHeader = "About Us";
      pageName = "About"
      break;
    case "product":
      breadcrumbHeader = "Product Details";
      pageName = productName || ''
      break;
    case "cart":
      breadcrumbHeader = "Cart Page";
      pageName = 'Cart'
      break;
    case "contact":
      breadcrumbHeader = "Contact Page";
      pageName = 'Contact'
      break;
    case "account":
      breadcrumbHeader = "My Account";
      pageName = 'My Account'
      break;
    default:
      breadcrumbHeader = "Default Header"; 
      pageName = "Default Name"
      break;
  }
  
  return (
    <div className="fz-inner-page-breadcrumb">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12">
            <div className="breadcrumb-txt">
              <h1>{breadcrumbHeader}</h1>
              {
                page === "product"? 
                <ul className="fz-inner-page-breadcrumb-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li className="current-page">{productName}</li>
                </ul>
                  :
                <ul className="fz-inner-page-breadcrumb-nav">
                  <li><Link to="/">Home</Link></li>
                  <li className="current-page">{pageName}</li>
                </ul>
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}