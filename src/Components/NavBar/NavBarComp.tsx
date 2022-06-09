import type { FC } from 'react';
import { Navbar,Row, Col} from "react-bootstrap";
import './NavBarComp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faX } from '@fortawesome/free-solid-svg-icons';

const NavbarComp: FC=()=>{

    return(
        <Navbar expand='lg'  className='Navbar backgroundImgNav'>
            <Navbar.Brand className="header">
                <FontAwesomeIcon icon={faBars}  className='hamMenu'/>
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
       
    )
}

export default NavbarComp;