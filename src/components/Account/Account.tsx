import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SignupForm from "./SignupForm";

export default function Account() {
  return (
    <>
      <Breadcrumbs page="account" />
      <section className="fz-account-form-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* <div className="col-lg-6 col-md-8 col-sm-9 col-10 col-xxs-12">
              <h3 className="single-form-title">Sign in</h3>
              <form action="#">
                <input type="text" name="login-username" id="login-username" placeholder="Username"/>
                <input type="password" name="login-password" id="login-password" placeholder="Password"/>
                <div className="sign-in-checkbox-container d-flex justify-content-between">
                  <div className="stay-sign-in">
                    <input type="checkbox" name="sign-in-checkbox" id="sign-in-checkbox"/>
                      <label htmlFor="sign-in-checkbox">Stay Logged in</label>
                  </div>
                  <a href="#" className="password-recovery-btn">Forgot Your Password?</a>
                </div>

                <button type="submit" className="fz-1-banner-btn single-form-btn">Log in</button>
              </form>
            </div> */}

            <SignupForm/>
          </div>
        </div>
      </section>
    </>
  )
}