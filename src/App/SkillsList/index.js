import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { GrTest } from "react-icons/gr";
import './SkillsList.css';

const SkillsList = () =>{

  const items = [
    { title: "FrontEnd", name: <FaCode />,
      skills: ["HTML5", "CSS", "JavaScript", "ReactJS", "TypeScript", "Angular"]
     },
    { title: "Backend", name: <FaServer />,
      skills: ["Python", "Java", "Express", "MySQL", "MongoDB"]
     },
    { title: "Testing", name: <GrTest />,
      skills: ["Jest", "Selenium"]
     },
    { title: "Herramientas", name: <IoIosSettings />,
      skills: ["GitHub", "Postman", "Scrum", "Audacity"]
      },

  ];

    return (
      <div className="containerSkills">
        
        {items.map(item => (
          <div className=" box centerX">
            {/* <div key={item.id} className="item"> */}
            <p className="iconData">{item.name}</p>
            <h2>{item.title}</h2>
            <ul className='skillList skills-list'>
                {item.skills.map(skill => (
                    <li>{skill}</li>
                ))}
            </ul>
          </div>
        ))}

      </div>
    );
  }

  
export default SkillsList;