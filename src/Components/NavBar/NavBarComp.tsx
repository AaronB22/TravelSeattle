import type { Dispatch, FC } from 'react';
import { Navbar,Row, Col} from "react-bootstrap";
import './NavBarComp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

 interface openMenus {
    classStatus:string;
}

const NavbarComp: FC  =()=>{

    const [menuStatus, setMenuStatus]= useState('closedMenu');
    const [blackOut, setBlackOut]= useState('noBlackout')
    
    return(
        <>
        <Navbar expand='lg'  className='Navbar backgroundImgNav'>
            <Navbar.Brand className="header">
                <FontAwesomeIcon icon={faBars} onClick={()=>{
                    if(menuStatus==='closedMenu'){
                        setMenuStatus('openMenu')
                        setBlackOut('screenBlackOut')
                    }
                    else {
                        setBlackOut('noBlackout')
                        setMenuStatus('closedMenu')
                    }                    
                }}  className='hamMenu fa-2xl'/>
                <h1 className='navTitle'>
                    Travel Seattle
                </h1>
            </Navbar.Brand>
            <Navbar.Brand className="opHeader">
                <Row>
                    <Col>
                        <h2 className='navOptions' >
                            <a href='/#about' className='navLink'>
                                About Seattle

                            </a>
                            </h2>
                    </Col>
                    <Col>
                        <h2 className='navOptions' onClick={()=>{
                            window.location.assign('/sights')
                        }}>Places to See</h2>
                    </Col>
                    <Col>
                        <h2 className='navOptions' onClick={()=>{
                            window.location.assign('/travel')
                        }}>Travel</h2>
                    </Col>
                </Row>
            </Navbar.Brand>
        </Navbar>
        <div className={blackOut} ></div>
        <div className={menuStatus}>
            <h2 className='openMenuText'>About</h2>
            <h2 className='openMenuText'>Sights</h2>
            <h2 className='openMenuText'>Travel</h2>

        </div>
        
        </>
       
    )
}

export default NavbarComp;