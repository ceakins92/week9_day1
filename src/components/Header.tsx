import { Button, Card } from "react-bootstrap"
import hero1 from "../static/img/hero1.png"
import logo_transp from "../static/img/logo_transp.png"

const cardText = {
    color:"white",
    fontSize: "25px"
}

const buttonText = {
    color:"yellow",
    fontSize: "18px",
}
  
export default function Header(){
    return (
    <>
        <Card className="title.card bg-dark text-white">
            <Card.Img src={hero1} alt="Comic Chaos"/>
            <Card.ImgOverlay>
                <Card.Title className="hero-title text-center "><img src={logo_transp} height="500px"/></Card.Title>
                <Card.Text style={cardText} className="hero-text text-center">
                    community | knowledge base | market<br/><br/>
                    <Button variant="outline-danger" style={buttonText}>Sign In</Button>{' '}  
                    <Button variant="outline-danger" style={buttonText}>Register</Button>{' '}
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
       
    </>    
    )
}