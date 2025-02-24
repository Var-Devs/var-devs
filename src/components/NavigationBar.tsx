import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../index.scss";
import Logo from "../assets/Logo.png";

export default function NavigationBar() {
  return (
    <nav>
      <div className="logo">
        <h1>VarDevs</h1>
        <img src={Logo} alt="VarDevs Logo" />
      </div>
      <div className="links">
        <Link to="/">Home</Link> {/* Change to Link component */}
        {/* <Link to="#">Demo</Link> */}
        <Link to="/services">Services</Link> {/* Change to Link component */}
        {/* <Link to="#">Team</Link> */}
        <Link to="/contactus">Contact</Link> {/* Change to Link component */}
      </div>
    </nav>
  );
}
