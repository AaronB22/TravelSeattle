import React from 'react';
import type { FC } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBarComp from './Components/NavBar/NavBarComp';
import './MainTheme.scss'


const App: FC=()=>{
    return(
      <>
       <NavBarComp/>
      </>
    )
}

export default App;
