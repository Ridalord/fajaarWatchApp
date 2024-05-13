import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useCurrency from '../../hooks/useCurrency';



export default function PriceFilter() {
  const {rate, currency}= useCurrency()
  const [value, setValue] = useState<number[]>([240, 600]);
  const{dispatch} = useProducts()

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const onSubmitPriceRange = () => {
    dispatch({ type: "SET_PRICE_RANGE", payload: { minPrice: value[0]/rate, maxPrice: value[1]/rate } })
  }

  useEffect(() => {
    setValue([240 * rate, 600 * rate])
  },[rate])

  return (
    <section className="sidebar-single-area price-filter-area">
      <h3 className="sidebar-single-area__title">Filter by price</h3>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        min={240*rate}
        max={600*rate}
        className='slider-keypress'
      />
      <div className="price-filter d-flex align-items-center justify-content-between">
        <div className="filtered-price d-flex align-items-center">
          <h6 className="filtered-price__title">price:</h6>
          <div className="filtered-price__number">
            <div className="range-start d-flex align-items-center">
              <span className="currency-sign">{currency === 'USD' ? '$' : '₦'}</span>
              <span className="input-with-keypress-0">
                {value[0].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
            <span className="hyphen">-</span>
            <div className="range-end d-flex align-items-center">
              <span className="currency-sign">{currency === 'USD' ? '$' : '₦'}</span>
              <span className="input-with-keypress-1">
                {value[1].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
          </div>
        </div>
        <button type="submit" className="filter-price-btn fz-1-banner-btn" onClick={onSubmitPriceRange}>
          Filter
        </button>
      </div>
    </section>
  );
}
