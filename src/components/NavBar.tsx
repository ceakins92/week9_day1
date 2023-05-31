import chaossymbol from "../static/img/chaossymbol.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><img src={chaossymbol} height="90" width="90"/></Navbar.Brand>
        <Navbar.Brand href="#home">Comic Chaos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse Comics</Nav.Link>
            <Nav.Link href="#pricing">Market</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#pricing">CoD</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign-In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;