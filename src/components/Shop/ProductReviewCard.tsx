import { Rating } from "@mui/material"
import DefaulImage from "./user.png"

type ReviewType = {
  id: string,
  name: string,
  rating: number,
  remark: string,
}

type PropTypes = {
  review: ReviewType
}

export default function ProductreviewCard({review}: PropTypes) {
  return (
    <div className="col-xl-6">
      <div className="single-review">
        <div className="user">
          <div className="user-img">
            <img src={DefaulImage} alt={review.name} />
          </div>
          <div className="user-info">
            <h6 className="user-name">{review.name}</h6>
            {/* <div className="user-rating">
              <i className="fa-solid fa-sharp fa-star"></i>
              <i className="fa-solid fa-sharp fa-star"></i>
              <i className="fa-solid fa-sharp fa-star"></i>
              <i className="fa-solid fa-sharp fa-star"></i>
              <i className="fa-light fa-sharp fa-star"></i>
            </div> */}
            <Rating name="review-rating" defaultValue={Number(review.rating)} precision={0.1} readOnly size="small" />
          </div>
        </div>

        <div className="review">
          <p>{review.remark}</p>
        </div>
      </div>
    </div>
  )
}