import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBarMain(){

    return (
        <>
        <Navbar bg='dark' sticky='top' variant='dark' className='NavBar'>
            <Container>
                <Navbar.Brand>Comic Chaos</Navbar.Brand>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
                <Nav.Link href="#">Register</Nav.Link>
                <Nav.Link href="#">Sign-In</Nav.Link>
            </Container>
        </Navbar>
       
        </>
    );
}