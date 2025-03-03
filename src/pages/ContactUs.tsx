import "./ContactUs.scss";
import { pageTitle } from "..//hooks/pageTitle";

export default function ContactUs() {
  pageTitle("Contact Us");

  return (
    <div className="contactus-body">
      <div className="contact-header">
        <h1>
          <p>
            Contact
          </p>
        </h1>
      </div>
      <div className="contact-main">
        <div className="left">
          <div className="header">
            <h2><p>Us</p></h2>
          </div>
          <div className="main">
            <form action={"https://formspree.io/f/mdkajrdz"} method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea placeholder="Your Inquiry" name="message" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="right">

          {/* FUTURE COMPANY INFO EMAIL, PHONE, ADDRESS ETC, WILL BE COLLAPSED OR HIDDEN AT CERTAIN VW */}
        </div>
      </div>
    </div>
  );
}
