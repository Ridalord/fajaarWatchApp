import React, { FormEvent, useState } from 'react';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import SuccessModal from './SuccessModal';
import emailjs from "emailjs-com"
import { Backdrop, CircularProgress } from '@mui/material';


interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const serviceID = 'service_000i3kc';
  const templateID = 'template_xzfkb9y';
  const userID = 'xfEc85Hn1dbsKZL_6';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(prev=>!prev)
    try {
      await addDoc(collection(db, 'Messages'), formData);
      const emailParams = {
        from_name: formData.firstName + ' ' + formData.lastName,
        reply_to: formData.email,
        message: formData.message,
      }
      emailjs.send(serviceID, templateID, emailParams, userID).then(
        (response) => {
          console.log('Email sent successfully:', response);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: ''
          });
          setLoading(prev => !prev)
          setShowSuccessModal(prev => !prev)
        },
        (error) => {
          console.error('Email delivery failed:', error);
        }
      );
      
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="fz-inner-contact-details__left">
      <div className="fz-blog-details__comment-form">
        <h4 className="fz-comment-form__title fz-inner-contact-details__title">Leave a Message</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-xl-4 g-3">
            <div className="col-6 col-xxs-12">
              <input type="text" name="firstName" value={formData.firstName} required id="commenter-first-name" placeholder="First Name" onChange={handleChange} />
            </div>
            <div className="col-6 col-xxs-12">
              <input type="text" name="lastName" value={formData.lastName} required id="commenter-last-name" placeholder="Last Name" onChange={handleChange} />
            </div>
            <div className="col-6 col-xxs-12">
              <input type="email" name="email" value={formData.email} required id="commenter-email" placeholder="Email Address" onChange={handleChange} />
            </div>
            <div className="col-6 col-xxs-12">
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} required id="commenter-number" placeholder="Phone Number" onChange={handleChange} />
            </div>
            <div className="col-12">
              <textarea name="message" value={formData.message} required id="commenter-comment" placeholder="Your Message" onChange={handleChange}></textarea>
            </div>
          </div>

          <button disabled={loading} type="submit" className="fz-1-banner-btn fz-comment-form__btn">Send Message</button>
        </form>
      </div>
      <SuccessModal setShowSuccessModal={setShowSuccessModal} showSuccessModal={showSuccessModal} />
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ContactForm;
