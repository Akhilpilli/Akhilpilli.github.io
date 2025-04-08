import "../styles/Footer.css";
import config from "../config/constants.json";

function Footer() {
  const name = config.name;
  return (
    <footer className="footer">
      <p>© 2024 {name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
