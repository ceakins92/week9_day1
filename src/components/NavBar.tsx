
import chaoslogo from "../static/img/chaoslogo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from "../Contexts/UserProvider";
import { useContext, useEffect } from "react";
import NavLink from "react-bootstrap/esm/NavLink";

export default function NavBar() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !user.token) {
      setUser({
        username: localStorage.getItem('username') || '',
        token: storedToken,
        loggedIn: true,
      });
    }
  });
  console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top" margin-right="25px">
      
        <Navbar.Brand><img src={chaoslogo} height="100" width="100"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="nav-item" as ={NavLink} to ="/">  Home  </Nav.Link>
            <Nav.Link className="nav-item" href="#">  About  </Nav.Link>
            <Nav.Link className="nav-item" href="#">  Browse Comics  </Nav.Link>
            <Nav.Link className="nav-item" href="#">  Search Comics  </Nav.Link>
            <Nav.Link className="nav-item" as={NavLink} to ="/posts">  Community  </Nav.Link>
            <Nav.Link className="nav-item" href="#">  CoD  </Nav.Link>
            <Nav.Link className="nav-item" href="#">  Market  </Nav.Link>
          </Nav>
          
          <Nav>
          {user.token || localStorage.getItem('token') ? (
            <>
            <Nav.Item><Nav.Link className="nav-item" as={NavLink} to={`/user/${user.username}`}>My Page</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className="nav-item" as={NavLink} to="/logout">Logout</Nav.Link></Nav.Item>
            </>
            ) : (
            <> 
            <Nav.Item><Nav.Link className="nav-item" as={NavLink} to="/loginpage">Sign in</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className="nav-item" as={NavLink} to="/register">Register   </Nav.Link></Nav.Item>
            </>
      )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}