import "../index.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>&copy; Var Devs {new Date().getFullYear()} </p>
      <Link to="/privacy">Privacy</Link>
    </footer>
  );
};

export default Footer;
