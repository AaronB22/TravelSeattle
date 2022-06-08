import type { FC } from 'react';
import { Navbar,Row, Col} from "react-bootstrap";
import './NavBarComp.scss'

const NavbarComp: FC=()=>{

    return(
        <Navbar expand='lg'  className='Navbar backgroundImgNav'>
            <Navbar.Brand className="header">
                <h1 className='navTitle'>
                    Travel Seattle
                </h1>
            </Navbar.Brand>
            <Navbar.Brand className="opHeader">
                <Row>
                    <Col>
                        <h2 className='navOptions'>About Seattle</h2>
                    </Col>
                    <Col>
                        <h2 className='navOptions'>Places to See</h2>
                    </Col>
                    <Col>
                        <h2 className='navOptions'>Book Trip</h2>
                    </Col>
                    <Col>
                        <h2 className='navOptions'>Contact</h2>
                    </Col>
                </Row>
            </Navbar.Brand>
        </Navbar>
       
    )
}

export default NavbarComp;