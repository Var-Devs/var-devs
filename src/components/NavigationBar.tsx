import "../index.scss";
import Logo from "../assets/Logo.png";

export default function NavigationBar() {
  return (
    <nav>
      <div className="logo">
        <h1>VarDevs</h1>
        <img src={Logo}></img>
      </div>
      <div className="links">
        <a href="/home">Home</a>
        <a href="#">Demo</a>
        <a href="/services">Services</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
