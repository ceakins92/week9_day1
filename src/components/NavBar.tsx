import chaossymbol from "../static/img/chaossymbol.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top" margin-right="25px">
      
        <Navbar.Brand><img src={chaossymbol} height="90" width="90"/></Navbar.Brand>
        <Navbar.Brand className="nav-item" href="#home">Comic Chaos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-item" href="#features">About</Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">Browse Comics</Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">Market</Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">Community</Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">CoD</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link className="nav-item" href="#deets">Sign-In</Nav.Link>
            <Nav.Link className="nav-item" eventKey={2} href="#memes">
              Search
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      
    </Navbar>
  );
}