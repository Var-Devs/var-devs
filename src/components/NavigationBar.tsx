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
        <a href="#">HOME</a>
        <a href="#">DEMO</a>
        <a href="#">TEAM</a>
        <a href="#">CONTACT</a>
      </div>
    </nav>
  );
}
