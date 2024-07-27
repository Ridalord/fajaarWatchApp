import { useState } from 'react';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import classes from "./Account.module.css"

export default function Account() {
  const [showSignin, setShowSignin] = useState(true);

  const toggleForm = () => {
    setShowSignin(prev => !prev);
  };

  return (
    <>
      <Breadcrumbs page="account" />
      <section className="fz-account-form-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className={`col-lg-12 col-md-8 col-sm-9 col-10 col-xxs-12 ${classes.formContainer} ${showSignin ? 'show-signin' : 'show-signup'}`}>
              {showSignin ? <SigninForm /> : <SignupForm />}
              <div className={`${classes.toggleLink}`}>
                <span onClick={toggleForm}>
                  {showSignin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
