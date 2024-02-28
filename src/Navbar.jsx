import { Container, Flex, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import logo from "./assets/img/cllg.png"; // Import the logo image
import './Navbar.css';

function Navbar() {
  return (
    <Container>
      <Flex>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" /> {/* Use the imported logo */}
          </div>
          <div className="navbar-links">
            <Link to="/home"><Button>Home</Button></Link>
          </div>
        </nav>
      </Flex>
    </Container>
  );
}

export default Navbar;
