import type { FC } from 'react';
import Footer from '../../Components/Footer/Footer';
import './Sights.scss'
import { Col, Row } from 'react-bootstrap';

const SightsPage:FC=()=>{

    return(
        <>
            <div>
                <img src={require('../../assets/SpaceNeedle.jpg')} className='homeImg'/>
                <div className='imgBlackout'></div>
                <div className='titleBox'>See the Sights</div>

            </div>
            <div className='contentDiv'>
                <div className='sightCard'>
                    <h2 className='cardTitle'>Space Needle</h2>
                    <Row>
                        <Col>
                            <img src={require('../../assets/SpaceNeedleCard.jpg')}  className='cardImg'/>
                        
                        </Col>
                        <Col>
                            <p className='desText'>
                                Space Needle is the crown jewel of the city! First built for the 1962 World's Fair, the Space Needle has towered over North Seattle for 6 decades! Best view of the city!
                            </p>
                        </Col>
                        <Col>
                            <div>
                                <a href='https://www.spaceneedle.com/' className='desText'>Website</a>
                                
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='sightCard'>
                    <h2 className='cardTitle'>Pike Place Market</h2>
                    <Row>
                        <Col>
                            <img src={require('../../assets/PikePlaceMarket.jpg')}  className='cardImg'/>
                        
                        </Col>
                        <Col>
                            <p className='desText'>
                               Seattle's world famous fish Market! Founded in 1907, this Market has made its mark on the city. This Market sells all kind of seafoods!
                            </p>
                        </Col>
                        <Col>
                            <div>
                                <a href='https://www.pikeplacemarket.org/' className='desText'>Website</a>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='sightCard'>
                    <h2 className='cardTitle'>Pacific Science Center</h2>
                    <Row>
                        <Col>
                            <img src={require('../../assets/psc.jpg')}  className='cardImg'/>
                        
                        </Col>
                        <Col>
                            <p className='desText'>
                               Right next to the Space Needle, you will find the amazing Pacific Science Center! Tons of amazing science exibits. Great For kids! Also host tons of events! Check their website for events!
                            </p>
                        </Col>
                        <Col>
                            <div>
                                <a href='https://www.pacificsciencecenter.org/' className='desText'>Website</a>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SightsPage;