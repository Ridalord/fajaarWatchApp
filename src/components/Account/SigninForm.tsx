import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


export default function SigninForm() {
  const navigate = useNavigate();
  const { dispatch, REDUCER_ACTIONS} = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // console.log(isLoggedIn,currentUser)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    dispatch({ type: REDUCER_ACTIONS.LOGIN, payload: { ...formData } })
    // dispatch({ type: REDUCER_ACTIONS.UPDATE_USER, payload: {...formData}})
    setFormData({
      email: '',
      password: ''
    })
    navigate("/")
  };

  // const handleLogOut = () => {
  //   dispatch({type:REDUCER_ACTIONS.LOGOUT})
  // }

  // console.log(currentUser, isLoggedIn)

  return (
    <div className="col-lg-6 col-md-8 col-sm-9 col-10 col-xxs-12">
      <h3 className="single-form-title">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

        <button type="submit" className="fz-1-banner-btn single-form-btn">Log In</button>
      </form>
      {/* <button type="submit" onClick={handleLogOut} className="fz-1-banner-btn single-form-btn">Logout</button> */}
    </div>
  )
}
