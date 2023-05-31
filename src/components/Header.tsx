import { Card } from "react-bootstrap"
import hero1 from "../static/img/hero1.png"

const cardText = {
    color:"white",
    fontSize: "25px"
}

export const Header = () => {
    return (
        <Card className="title.card bg-dark text-white">
            <Card.Img src={hero1} alt="Comic Chaos"/>
            <Card.ImgOverlay>
                <Card.Title className="hero-title text-center mt-100"></Card.Title>
                <Card.Text style={cardText} className="hero-text text-center">
                    <br/><br/><br/><br/><br/><br/><br/>
                    community | knowledge base | market
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}