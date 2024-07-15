import { GiHamburgerMenu } from "react-icons/gi";
import './ItemPage.css'

function ItemsPage({widthScreen, listPages, stateLateralMenu, setStateLateralMenu}) {

    if (widthScreen > 780) {
        setStateLateralMenu(false);
        return (
            <>
                <ul className="ulHeader inlineList noList itemCenter">
                    {listPages.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>            
            </>
        );
    } else {
        return (
            <>
                <GiHamburgerMenu 
                    id="IconHamburguer" 
                    onClick={
                        () => {
                            setStateLateralMenu(!stateLateralMenu)
                        }
                    }
                />         
            </>
        );
    }

}

export default ItemsPage ;