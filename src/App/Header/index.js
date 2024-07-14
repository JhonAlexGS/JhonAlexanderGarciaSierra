import myImage from '../img/Perfil.jpg';
import ItemsPage from './ItemPage'
import "./Header.css"


function Header({widthScreen}) {

    return (
        <>
            <header>
                <nav>
                    <img className='circleEdge' alt="Perfil" src={myImage}/>
                    <a href="a" id="name">JHON GARCÍA</a>
                    <ItemsPage widthScreen={widthScreen}></ItemsPage>
                </nav>
                
            </header>
            <p>Ancho de la ventana: {widthScreen}   px</p>
        </>
    );

}

export default Header ;