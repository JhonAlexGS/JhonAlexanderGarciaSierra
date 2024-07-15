import myImage from '../img/Perfil.jpg';
import myCat0 from '../img/Gato_0.png';
import myCat1 from '../img/Gato_1.png';
import myCat2 from '../img/Gato_2.png';
import ItemsPage from './ItemPage'
import "./Header.css"
import React from 'react';


function Header({widthScreen}) {

    const [stateLateralMenu, setStateLateralMenu] = React.useState(false);
    const [stateCatEyes, setstateCatEyes] = React.useState(0);

    const catEyes = [
        myCat0, myCat1, myCat2
    ]

    const listPages = [
        { href: "a", text: "SKILLS" },
        { href: "a", text: "PROYECTOS" },
        { href: "a", text: "FORMACIÓN" },
        { href: "a", text: "CONTACTO" }
      ];

    const handleButtonClick = () => {
    window.location.href = 'https://drive.google.com/file/d/1xZKCOz2Z3gX3bMfDuXPVs_5z8l4aDzpi/view?usp=sharing';
    };

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
            
            <div className='description'>
                <img id="imgCat" className='circleEdge' alt="Cat" src={catEyes[stateCatEyes]}  
                    onClick={
                        () => {
                            if (stateCatEyes === 2) {
                                setstateCatEyes(0)
                            }else{
                                setstateCatEyes(stateCatEyes+1)
                            }
                            
                        }
                    }/>
                <div>
                    <h2 className='rowdies-light'>
                        Ingeniero de Sistemas y Telecomunicaciones
                    </h2>
                    <hr></hr>
                    <hr></hr>
                    <p>
                        Cuento con dos años de experiencia profesional en areas de la tecnología
                        y con interés en Redes, Base de Datos, Desarrollo Web, Radio 
                        definida por Software, Arquitectura de Software, Diseño de Experiencia 
                        de Usuario, Seguridad de la Información, Inteligencia Artificial, 
                        Desarrollo en el Back-end y Front-end.
                    </p>
                    <button onClick={handleButtonClick}>
                        CV
                    </button>
                    <div class="button_slide slide_left">BUTTON: SLIDE INSIDE </div>
                </div>
            </div>
            
        </>
    );

}

export default Header ;