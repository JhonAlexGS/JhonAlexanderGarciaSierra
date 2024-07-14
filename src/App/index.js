import React from 'react';
import Header from './Header'
import useWindowSize from './useWindowSize';
import './App.css'


function App() {

    const { width } = useWindowSize();

    return (
        <React.Fragment>

            <Header widthScreen={width}/>
            
        </React.Fragment>
    );
  }


export default App ;

