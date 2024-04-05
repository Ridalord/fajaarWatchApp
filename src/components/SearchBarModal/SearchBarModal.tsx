import { Search, X } from "react-bootstrap-icons";



type PropTypes = {
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>,
  showSearchBar: boolean
}

export default function SearchBarModal({ setShowSearchBar, showSearchBar }: PropTypes) {
  const handleClickSearch = () => {
    setShowSearchBar(prev=>!prev)
  }
  return (
    <div className={`overlay ${showSearchBar ? "open" : null}`}>
      <div className={`fz-cbsearchbar fz-cb-sidebar-area fz-7-body ${showSearchBar ? 'fz-cb-searchbar-opened' : null}`} data-aos="fade-down">
        <button className="fz-cbsearchbar__close" onClick={handleClickSearch}><X /></button>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 pt-100 pb-100">
                <h2 className="fz-cbsearchbar__title">What Product Are You Looking For?</h2>
                <div className="fz-cbsearchbar__form">
                  <form action="#">
                    <input type="search" name="s" placeholder="Search Product" />
                    <button className="fz-cbsearchbar__search-btn" type="submit"><Search /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}