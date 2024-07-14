import { GiHamburgerMenu } from "react-icons/gi";
import './ItemPage.css'

function ItemsPage({widthScreen}) {

    if (widthScreen > 780) {
        return (
            <>
                <ul className="inlineList noList itemCenter">
                    <li><a href="a">SKILLS</a></li>
                    <li><a href="a">PROYECTOS</a></li>
                    <li><a href="a">FORMACIÓN</a></li>
                    <li><a href="a">CONTACTO</a></li>
                </ul>            
            </>
        );
    } else {
        return (
            <>
                <GiHamburgerMenu id="IconHamburguer" />         
            </>
        );
    }

}

export default ItemsPage ;