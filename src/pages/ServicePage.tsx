import "./ServicePage.scss";
import mobile_device from "../assets/mobile_device.png";
import laptop_device from "../assets/laptop_device.png";

export default function ServicePage() {
  return (
    <div className="service-body">
      <div className="header">
        <h1> SERVICES </h1>
        <p>We Provide</p>
      </div>
      <div className="laptop-body">
        <img src={laptop_device} />
        <div className="description">
          <h1>Web Support</h1>
          <p>.Cross-browser Compatibility</p>
          <p>.Responsive Design</p>
          <p>.Support and Update</p>
          <p>.Use Experience Optimization</p>
        </div>
      </div>
      <div className="mobile-body">
        <div className="description">
          <h2>Also</h2>
          <h1>Mobile compatible</h1>
          <p>
            your website will function seamlessly across various devices,
            including smartphones and tablets. With our commitment to mobile
            responsiveness, your website remains accessible and user-friendly,
            enhancing engagement and satisfaction for all visitors.
          </p>
        </div>
        <img src={mobile_device} />
      </div>
      <footer>
        <p>&copy; Var Devs {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}
