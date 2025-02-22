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
    </div>
  );
}
