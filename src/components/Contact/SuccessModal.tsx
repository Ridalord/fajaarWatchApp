
type PropTypes = {
  showSuccessModal: boolean
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>
}



export default function SuccessModal({ showSuccessModal, setShowSuccessModal }: PropTypes) {
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(prev => !prev)
  }
  return (
    <div className={`overlay ${showSuccessModal ? 'open' : null}`}>
      <div className={`cart-area cart-area-modal fz-7-body ${showSuccessModal ? 'open' : null}`} id="cart-area-modal" data-aos="fade-down">
        <div className="cart__header d-flex justify-content-center">
          <h3 className="cart__title">Message Sent!</h3>
        </div>
        <div className="cart__body">
          <p className="text-center">Our team will review it shortly and get back to you as soon as possible.</p>
          <p className="text-center">If you have any further questions or concerns, feel free to contact us again. Have a great day!</p>
          <div className="cart-left-actions d-flex justify-content-end">
            <button className="fz-1-banner-btn update-cart-btn" onClick={handleCloseSuccessModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}