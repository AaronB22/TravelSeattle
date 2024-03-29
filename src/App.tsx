import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import CustomRouter from './CustomRouter';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import NavBarComp from './Components/NavBar/NavBarComp';
import './MainTheme.scss'


const App: FC=()=>{

  const [popout, setPopout]= useState('closedPopout')
  useEffect(()=>{
    if(window.location.pathname==='/' && window.location.hash!== '#about'){
      setPopout('popout')
    }
  },[setPopout])

    return(
      <>
       <NavBarComp/>
       <Router>
          <CustomRouter/>
          <div className={popout}>
            <div className='mainpopout'>
              <h2 className='popoutTitle'>This is a demo website</h2>
              <button className='closedPopoutBtn' onClick={()=>{
                setPopout('closedPopout')
              }}>X</button>
              <p>This website is made by Aaron Bailey as a demo website project. Checkout the code here:<a href='https://github.com/AaronB22/CompanyPageProj' >https://github.com/AaronB22/CompanyPageProj</a></p>
            </div>

            </div>
       </Router>
      </>
    )
}

export default App;
