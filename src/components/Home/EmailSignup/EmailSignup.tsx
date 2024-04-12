import { FormEvent, useState } from "react";
import CTAImage from "./fz-7-cta-img.png";
import CTABgImage from "./fz-7-cta-img-bg.png";
import CTAWrapBg from "./fz-7-cta-bg.jpg";
import { db } from "../../../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    window.addEventListener('offline', () => {
      console.log("offline")
      setMessage("An error occurred. Please try again later.");
      toast.error(message)
    })

    try {
      const q = query(collection(db, "Subscriptions"), where("email", "==", email));
      const existingSubscription = await getDocs(q);

      if (existingSubscription.empty) {
        await addDoc(collection(db, "Subscriptions"), { email });
        setMessage("Subscription successful!");
        toast.success(message);
        setEmail('');
        // console.log(message)
      } else {
        setMessage("You are already subscribed!");
        toast.error(message)
        // console.log(message)
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      toast.error(message)
      console.error("Error subscribing:", error);
    }
  };

  return (
    <section className="fz-7-cta pb-120" data-aos="fade-up" style={{ backgroundImage: `url(${CTAWrapBg})` }}>
      <div className="container">
        <div className="row gx-0 gy-5 justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-4">
            <div className="fz-7-cta-img" style={{ backgroundImage: `url(${CTABgImage})` }}>
              <img src={CTAImage} alt="" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-7">
            <div className="fz-7-subs">
              <h2 className="fz-7-section-title">Sign Up For Farjaa Emails</h2>
              <p className="fz-7-section-descr">It only takes a second to be the first to find out about our latest news and promotions...</p>
              <form onSubmit={handleSubscribe} className="fz-6-subs-form fz-7-subs-form">
                <input type="email" name="email" id="fz-6-subs-mail" placeholder="Email address..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
