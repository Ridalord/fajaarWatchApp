import Slider from '@mui/material/Slider';
import { useState } from 'react';


function valuetext(value: number) {
  return `$${value}`;
}

export default function PriceFilter() {
  const [value, setValue] = useState<number[]>([240, 420]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <section className="sidebar-single-area price-filter-area">
      <h3 className="sidebar-single-area__title">Filter by price</h3>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={240}
        max={420}
        className='slider-keypress'
      />
      <div className="price-filter d-flex align-items-center justify-content-between">
        <div className="filtered-price d-flex align-items-center">
          <h6 className="filtered-price__title">price:</h6>
          <div className="filtered-price__number">
            <div className="range-start d-flex align-items-center">
              <span className="currency-sign">$</span>
              <span className="input-with-keypress-0">
                {value[0]}
              </span>
            </div>
            <span className="hyphen">-</span>
            <div className="range-end d-flex align-items-center">
              <span className="currency-sign">$</span>
              <span className="input-with-keypress-1">
                {value[1]}
              </span>
            </div>
          </div>
        </div>
        <button type="submit" className="filter-price-btn fz-1-banner-btn">
          Filter
        </button>
      </div>
    </section>
  );
}
