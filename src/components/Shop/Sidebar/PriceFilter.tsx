// import { useEffect, useRef, useState } from "react";
// import noUiSlider from "nouislider";
// import "nouislider/distribute/nouislider.css";

// export default function PriceFilter() {
//   const [sliderValues, setSliderValues] = useState([240, 768]);
//   const sliderRef = useRef(null);
//   const input0Ref = useRef<React.RefObject<HTMLElement>>(null);
//   const input1Ref = useRef<React.RefObject<HTMLElement>>(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const input0 = input0Ref.current;
//     const input1 = input1Ref.current;

//     if (slider) {
//       noUiSlider.create(slider, {
//         start: [240, 768],
//         connect: true,
//         step: 1,
//         range: {
//           min: 100,
//           max: 1000,
//         },
//       });

//       slider.noUiSlider.on("update", (values, handle) => {
//         setSliderValues(values.map(parseFloat));
//       });

//       const setSliderHandle = (handle: number, value: number | string) => {
//         const newValues = [...sliderValues];
//         newValues[handle] = Number(value);
//         slider.noUiSlider.set(newValues);
//       };

//       [input0, input1].forEach((input, handle) => {
//         input.addEventListener("change", () => {
//           setSliderHandle(handle, input.value);
//         });

//         input.addEventListener("keydown", (e) => {
//           const values = slider.noUiSlider.get();
//           const value = Number(values[handle]);
//           const steps = slider.noUiSlider.steps();
//           const step = steps[handle];
//           let position;

//           switch (e.which) {
//             case 13:
//               setSliderHandle(handle, input.value);
//               break;

//             case 38:
//               position = step[1];
//               if (position === false) position = 1;
//               if (position !== null) setSliderHandle(handle, value + position);
//               break;

//             case 40:
//               position = step[0];
//               if (position === false) position = 1;
//               if (position !== null) setSliderHandle(handle, value - position);
//               break;

//             default:
//               break;
//           }
//         });
//       });
//     }
//   }, []);

//   return (
//     <section className="sidebar-single-area price-filter-area">
//       <h3 className="sidebar-single-area__title">Filter by price</h3>
//       <div ref={sliderRef} className="slider-keypress"></div>
//       <div className="price-filter d-flex align-items-center justify-content-between">
//         <div className="filtered-price d-flex align-items-center">
//           <h6 className="filtered-price__title">price:</h6>
//           <div className="filtered-price__number">
//             <div className="range-start d-flex align-items-center">
//               <span className="currency-sign">$</span>
//               <span ref={input0Ref} className="input-with-keypress-0">
//                 {sliderValues[0]}
//               </span>
//             </div>
//             <span className="hyphen">-</span>
//             <div className="range-end d-flex align-items-center">
//               <span className="currency-sign">$</span>
//               <span ref={input1Ref} className="input-with-keypress-1">
//                 {sliderValues[1]}
//               </span>
//             </div>
//           </div>
//         </div>
//         <button type="submit" className="filter-price-btn fz-1-banner-btn">
//           Filter
//         </button>
//       </div>
//     </section>
//   );
// }
