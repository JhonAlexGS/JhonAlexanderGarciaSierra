import { FaDatabase } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";
import { IoIosRadio } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiFrontendmentor } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import nttData from './img/NTTData.png';
import React from 'react';
import './Description.css'

const Description = () =>{

    // const [stateCatEyes, setstateCatEyes] = React.useState(0);

    const handleButtonClick = () => {
        window.location.href = 'https://drive.google.com/file/d/1xZKCOz2Z3gX3bMfDuXPVs_5z8l4aDzpi/view?usp=sharing';
        };

    return (

        <div className='descriptionJobs'>
            <p id="date">Ingreso: Oct-2024</p>

            <div id="cardJobs">
                <img id="logoJob" alt="NttData" src={"https://companieslogo.com/img/orig/9613.T-dd7e06a3.png?t=1720244490"}/>
                {/* <div class="button_slide slide_left" onClick={handleButtonClick}>CV </div> */}
            </div>
            
            <div id="aboutMe" class="centerY broad">


                <div className="not-affected">
                    <h2 className='rowdies-light'>
                        NTT Data
                    </h2>
                    <hr></hr>
                    <hr></hr>
                </div>

                <br></br>
                
                <p class="smallText">
                  Multinacional especializada en servicios de consultoría tecnológica con sede en Tokio, que continúa sumando territorios en los que seguir innovando a través de las tecnologías emergentes, con el objetivo de desarrollar proyectos innovadores que contribuyan a mejorar la vida de las personas.
                </p>

                <br></br>

                <p><b>Cargo desempeñado:</b> Programador Full Stack</p>

                <br></br>

                <p><b>Función:</b> Desarrollo, revisión y supervisión de la funcionalidad y entrenamiento de las nuevas funcionalidades que ofrece el Chatbot de la compañía Zurich.</p>
 
                <br></br>

                <h3>Habilidades adquiridas:</h3>

                <br></br>

                <ul id="acquiredSkills">
                  <li>Python</li>
                  <li>Control de calidad</li>
                </ul>

            </div>
        </div>

    )

}

export default Description ;