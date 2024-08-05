import React from 'react';
import myImage from '../img/Perfil.jpg';
import ItemsPage from './ItemPage'
import "./Header.css"

function Header({widthScreen}) {

    const [stateLateralMenu, setStateLateralMenu] = React.useState(false);

    const listPages = [
        { href: "a", text: "SKILLS" },
        { href: "a", text: "PROYECTOS" },
        { href: "a", text: "FORMACIÓN" },
        { href: "a", text: "CONTACTO" }
      ];

    return (
        <>
            <header>
                <nav>
                    <img className='circleEdge' alt="Perfil" src={myImage}/>
                    <a href="a" id="name">JHON GARCÍA</a>
                    <ItemsPage 
                        widthScreen={widthScreen} 
                        listPages = {listPages}
                        stateLateralMenu = {stateLateralMenu}
                        setStateLateralMenu = {setStateLateralMenu}
                    ></ItemsPage>
                </nav>
                
            </header>

            {   
                stateLateralMenu && (
                    <div id="lateralMenu" >
                        <ul className='noList'>
                            {listPages.map((item, index) => (
                            <li className='sep' key={index}>
                                <a href={item.href}>{item.text}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                )
            }            
            
        </>
    );

}

export default Header ;