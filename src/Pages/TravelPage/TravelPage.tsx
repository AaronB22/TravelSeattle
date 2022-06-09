import type { FC } from 'react';
import './TravelPage.scss'
import { Row, Col, Card } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';

const TravelPage:FC=()=>{

    return(
        <>
            <div>
                <img src={require('../../assets/airplane.jpg')} className='homeImg' />
                <div className='imgBlackout'></div>
                <div className='titleBox'>
                    Traveling Seattle
                </div>
            </div>
            <div className='AboutDiv travelAboutDiv'>
                <div>
                    <h2 className='TravelCatHeader'>Airports</h2>
                    <Row>
                        <Col>
                            <Card className='travelCard'>
                                <h3 className='travelSubHeader'>Seattle Tacoma International Airport</h3>
                                <img src={require('../../assets/SEA.jpg')} className='cardImg'/>
                                <div className='travelText'>
                                Seattle's main airport! Serving as the cities internation airport, "Sea-Tac" provided routes from all around the world! Most major US arilines go here, and many internation Airlines.
                                </div>
                            </Card>
                        
                        </Col>
                        <Col>
                            <Card className='travelCard'>
                                <h3 className='travelSubHeader'>Paine Field</h3>
                                <img src={require('../../assets/Paine_Field.jpg')} className='cardImg'/>
                                <div className='travelText'>
                                Paine Field serves the north of Seattle with limited service. Mainly served by Alaska Airlines, with destinations from/to Boise Las Vegas, LA, Phoenix, San Francisco! Not as well contected as Sea-Tac, but you can find some good deals!
                                </div>
                            </Card>
                        
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default TravelPage;