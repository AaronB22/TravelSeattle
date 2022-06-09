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
                                <img src={require('../../assets/SEA.jpg')} className='cardImg' alt= ' Seattle Tacoma International from the air'/>
                                <div className='travelText'>
                                Seattle's main airport! Serving as the cities internation airport, "Sea-Tac" provided routes from all around the world! Most major US arilines go here, and many internation Airlines.
                                </div>
                            </Card>
                        
                        </Col>
                        <Col>
                            <Card className='travelCard'>
                                <h3 className='travelSubHeader'>Paine Field</h3>
                                <img src={require('../../assets/Paine_Field.jpg')} className='cardImg' alt='Paine Field from the air'/>
                                <div className='travelText'>
                                Paine Field serves the north of Seattle with limited service. Mainly served by Alaska Airlines, with destinations from/to Boise Las Vegas, LA, Phoenix, San Francisco! Not as well contected as Sea-Tac, but you can find some good deals!
                                </div>
                            </Card>
                        
                        </Col>
                    </Row>
                </div>
                <div>
                <h2 className='TravelCatHeader'>Ground Travel</h2>
                <Row>
                        <Col>
                            <Card className='travelCard'>
                                <h3 className='travelSubHeader'>Amtrak</h3>
                                <img src={require('../../assets/amtrak.jpg')} className='cardImg' alt='Amtrak Train in the snow'/>
                                <div className='travelText'>
                                    Amtrak is a major rail service in the United States. In Seattle, Amtrak goes to King Street Station! Taking Amtrak to Seattle is a great way to see the Pacific Northwest! May not be has fast as a plane, but you wil lbe treated to amazing views!
                                </div>
                            </Card>
                        
                        </Col>
                        <Col>
                        <Card className='travelCard'>
                                <h3 className='travelSubHeader'>Interstates</h3>
                                <img src={require('../../assets/I90.jpg')} className='cardImg' alt='I-90 goive over Lake Washingtion'/>
                                <div className='travelText'>
                                    Want to travel by car? Well your in luck! Seattle is easy to drive to by Interstate! With I-5 connecting the city all the way south to LA and all the way north to Vancouver Canada. As well ass I-90 connecting the city all the way to Boston!
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