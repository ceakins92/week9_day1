import { Card } from "react-bootstrap"
import hero1 from "../static/img/hero1.png"
import logo_transp from "../static/img/logo_transp.png"

const cardText = {
    color:"white",
    fontSize: "25px"
}

export const Header = () => {
    return (
        <Card className="title.card bg-dark text-white">
            <Card.Img src={hero1} alt="Comic Chaos"/>
            <Card.ImgOverlay>
                <Card.Title className="hero-title text-center "><img src={logo_transp} height="500px"/></Card.Title>
                <Card.Text style={cardText} className="hero-text text-center">
                    community | knowledge base | market
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}