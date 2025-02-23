import "./ContactUs.scss";

export default function ContactUs() {
  return (
    <div className="contactus-body">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
      <div className="contact-main">
        <div className="left">
          <div className="header">
            <h2>Us</h2>
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
        <div className="right"></div>
      </div>
      <footer>
        <p>&copy; Var Devs {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}
