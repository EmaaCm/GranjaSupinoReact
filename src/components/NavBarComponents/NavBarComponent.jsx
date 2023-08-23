import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';

const NavBarComponent = () => {
  return (
    <Navbar id="NavBar" collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home">Granja Supino</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Combos</Nav.Link>
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
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
      <p className="textCarro">0</p>
    </Navbar>
  );
}

export default NavBarComponent;