import { pageTitle } from "../hooks/pageTitle";
import "./AboutUs.scss";

export default function AboutUs() {
  pageTitle("About Us");
  return (
    <div className="about-page">
      <div className="header">
        <div className="">
          <h2>MEET THE</h2>
          <h1>VAR DEVS TEAM</h1>
        </div>
      </div>
      <div className="about-page-body">
        <div className="member-box">
          <div className="info">
            <h1>Antonio.M</h1>
            <div className="description">
              <p>
                As the CEO and driving force behind our business, Antonio is the
                visionary leader who ensures our brand reaches the right people.
                With a strong focus on growth and strategic planning, he forges
                valuable partnerships, promotes our services, and keeps our
                company moving forward. His expertise in business development
                and networking plays a key role in our success.
              </p>
            </div>
          </div>
          <div className="image">
            <span />
            <span />
          </div>
        </div>
        <div className="member-box">
          <div className="image">
            <span />
            <span />
          </div>
          <div className="info">
            <h1>Shubham.R</h1>
            <div className="description">
              <p>
                Shubham is a multi-talented leader who wears many hats. As a
                CEO, he oversees our technical and creative operations, ensuring
                that our products are both high-performing and beautifully
                designed. With a deep understanding of coding, UI/UX design, and
                system architecture, he bridges the gap between innovation and
                functionality.
              </p>
            </div>
          </div>
        </div>
        <div className="member-box">
          <div className="info">
            <h1>Olli.T</h1>
            <div className="description">
              <p>
                Olli is the backbone of our development team, specializing in
                building reliable and scalable software solutions. His expertise
                in programming, debugging, and optimizing code ensures that
                every project we deliver is efficient, secure, and
                user-friendly. From web applications to backend systems, Olli
                brings technical brilliance to our work.
              </p>
            </div>
          </div>
          <div className="image">
            <span />
            <span />
          </div>
        </div>
        <div className="member-box">
          <div className="image">
            <span />
            <span />
          </div>
          <div className="info">
            <h1>Jesse.T</h1>
            <div className="description">
              <p>
                Jesse is the creative force behind our online presence. He
                manages our social media platforms, crafts compelling content,
                and engages with our audience to build a strong and loyal
                community. Through strategic marketing, he ensures that our
                brand stays visible, relevant, and impactful in the digital
                space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
