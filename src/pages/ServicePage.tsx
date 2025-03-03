import "./ServicePage.scss";
import mobile_device from "../assets/images/phone.png";
import laptop_device from "../assets/images/laptop.png";

import { pageTitle } from "..//hooks/pageTitle";

export default function ServicePage() {

  pageTitle("Services");

  return (
    <div className="service-body">
      <div className="header">
        <h1> SERVICES </h1>
        <p>We Provide</p>
      </div>
      <div className="laptop-body">
        <img src={laptop_device} />
        <div className="description">
          <h1>Full Stack Development</h1>
  <div className= "laptop-description">
    <p>
      Enjoy seamless compatibility and integration
      with our teams skillset for intuitive design and expert delivery.
      We provide solutions and adaptability for all stages of your softwares development life-cycle.
    </p>
  </div>

        </div>
      </div>
      <div className="mobile-body">
        <div className="description">
          <h2>Responsive Designs</h2>
          <h1>made easy.</h1>
          <p>
          With our commitment making only the highest of quality works, 
          our applications function seamlessly across various devices,
          including mobile and tablet devices.
          </p>
        </div>
        <img src={mobile_device} />
      </div>
      <div className="coming-soon">
        <h1>Our Latest Projects</h1>
        <h3>Coming Soon...</h3>
      </div>

      <footer>
        <p>&copy; Vardevs {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}
