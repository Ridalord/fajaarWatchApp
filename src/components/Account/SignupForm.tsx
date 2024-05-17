import { useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function SignupForm() {
  const {dispatch, REDUCER_ACTIONS, currentUser, isLoggedIn}= useAuth()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  console.log(isLoggedIn,currentUser)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); 
    localStorage.setItem("userData", JSON.stringify(formData))
    dispatch({ type: REDUCER_ACTIONS.SIGNUP, payload: { ...formData } })
    // dispatch({ type: REDUCER_ACTIONS.UPDATE_USER, payload: {...formData}})
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  };

  const handleLogOut = () => {
    dispatch({type:REDUCER_ACTIONS.LOGOUT})
  }

  // console.log(currentUser, isLoggedIn)

  return (
    <div className="col-lg-6 col-md-8 col-sm-9 col-10 col-xxs-12">
      <h3 className="single-form-title">Sign up</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

        <button type="submit" className="fz-1-banner-btn single-form-btn">Register</button>
      </form>
      <button type="submit" onClick={handleLogOut} className="fz-1-banner-btn single-form-btn">Logout</button>
    </div>
  )
}
