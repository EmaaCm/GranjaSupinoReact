import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";


const NavBarComponent = () => {
  return (
    <Navbar id="NavBar" collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand><Link to="/">Granja Supino</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link>Combos</Nav.Link>
            <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">0</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
      <p className="textCarro">0</p>
    </Navbar>
  );
}

export default NavBarComponent;