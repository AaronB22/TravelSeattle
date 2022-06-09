import React from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import CustomRouter from './CustomRouter';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBarComp from './Components/NavBar/NavBarComp';
import './MainTheme.scss'


const App: FC=()=>{
    return(
      <>
       <NavBarComp/>
       <Router>
          <CustomRouter/>
       </Router>
      </>
    )
}

export default App;
