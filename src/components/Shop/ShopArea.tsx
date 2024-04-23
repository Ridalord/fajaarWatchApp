import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ShopProductItem from "./Sidebar/ShopProductItem";
import Sidebar from "./Sidebar/Sidebar";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import { Grid, ListCheck } from "react-bootstrap-icons";

export default function ShopArea() {
  const { filteredProducts, loading } = useProducts();
  const [sorting, setSorting] = useState('menu_order');
  const [viewType, setViewType] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = Math.min(9, filteredProducts.length);

  const handleChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value);
  };

  const handleGridViewClick = () => {
    setViewType('grid');
  };

  const handleListViewClick = () => {
    setViewType('list');
  };

  const indexOfLastProduct: number = Math.min(currentPage * productsPerPage, filteredProducts.length);
  const indexOfFirstProduct: number = Math.min(indexOfLastProduct - productsPerPage, filteredProducts.length);
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="shop-area">
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <Sidebar />

          <div className="col-xl-9 col-lg-8 order-0 order-lg-1">
            <div className="product-view-actions">
              <div className="row gy-3 align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-5 col-6 col-xxs-12 text-center text-md-start">
                  <p className="text-center text-sm-start">Showing {indexOfFirstProduct + 1}-{indexOfLastProduct} of {filteredProducts.length} results</p>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-7 col-6 col-xxs-12 col-sm-6">
                  <div className="product-view-right-actions text-center text-md-end d-flex justify-content-center justify-content-md-end">
                    <div className="view-type">
                      <button className={`grid-view ${viewType === 'grid' ? 'active' : ''}`} onClick={handleGridViewClick}>
                        <Grid />
                      </button>

                      <button className={`list-view ${viewType === 'list' ? 'active' : ''}`} onClick={handleListViewClick}>
                        <ListCheck />
                      </button>
                    </div>

                    <div className="product-sorting d-inline-block">
                      <form className="" action="#">
                        <Select
                          value={sorting}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="menu_order">
                            Default sorting
                          </MenuItem>
                          <MenuItem value="popularity">Sort by popularity</MenuItem>
                          <MenuItem value="rating">Sort by average rating</MenuItem>
                          <MenuItem value="date">Sort by latest</MenuItem>
                          <MenuItem value="price">Sort by price: low to high</MenuItem>
                          <MenuItem value="price-desc">Sort by price: high to low</MenuItem>
                        </Select>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`fz-inner-products-container ${viewType === 'list' ? 'list-view-on' : ''}`}>
              <div className="row">
                {loading ? <p>Loading...</p> : currentProducts.map((product) => <ShopProductItem product={product} key={product.id} />)}
              </div>
            </div>

            <nav className="fz-shop-pagination">
              <ul className="page-numbers">
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
                  <li key={index} onClick={() => paginate(index + 1)}>
                    <div className={`page-number-btn ${currentPage === index + 1 ? 'current' : ''}`}>
                      <span aria-current="page" className="page-number current">{index + 1}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
