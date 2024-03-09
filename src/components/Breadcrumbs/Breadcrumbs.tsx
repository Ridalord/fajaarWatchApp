type PropTypes = {
  page: string
}
export default function Breadcrumbs({ page }: PropTypes) {
  let breadcrumbHeader: string = '';
  let pageName: string = ''

  switch (page) {
    case "shop":
      breadcrumbHeader = "Shop Page";
      pageName = "Products"
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
              <ul className="fz-inner-page-breadcrumb-nav">
                <li><a href="index.html">Home</a></li>
                <li className="current-page">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}