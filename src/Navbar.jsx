import { Flex, Button } from "@radix-ui/themes";
import logo from "./assets/img/cllg.png"; // Import the logo image
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <Flex>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </nav>
    </Flex>
  );
}

export default Navbar;
