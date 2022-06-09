import type { FC } from 'react';
import './Footer.scss'
import { Col, Row } from 'react-bootstrap';


const Footer:FC=()=>{

    return(
        <div className='Footer'>
            <div className='footerText'>
                This website is a demonstration project by Aaron Bailey
            </div>
            <div className='logoDiv'>
                <Row>
                    <Col>
                        <img src={require('../../assets/GitHubLogo.png')} className='pointer' onClick={()=>{
                            window.location.assign('https://github.com/AaronB22')
                        }}/>
                    
                    </Col>
                    <Col>
                    
                        <img src={require('../../assets/LinkedIn.png')} className='footerImg pointer' onClick={()=>{
                            window.location.assign('https://www.linkedin.com/in/aaron-bailey-08486320a/')
                        }}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer;