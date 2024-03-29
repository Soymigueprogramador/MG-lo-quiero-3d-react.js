import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <>
      <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">MG lo quiero 3D</Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link> 
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link> 
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  </>
  );
}

export default BasicExample;