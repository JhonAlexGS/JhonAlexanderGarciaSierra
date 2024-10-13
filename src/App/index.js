import React from 'react';
import Header from './Header'
import useWindowSize from './useWindowSize';
import SkillsList from "./SkillsList";
import Description from './Description';
import JobsList from './JobsList'
import './App.css'


function App() {

    const { width } = useWindowSize();

    return (
        <React.Fragment>

            <Header widthScreen={width}/>
            <Description/>
            <SkillsList/>

            <h3>Empresas apoyadas</h3>
            <JobsList/>
            
        </React.Fragment>
    );
  }


export default App ;

