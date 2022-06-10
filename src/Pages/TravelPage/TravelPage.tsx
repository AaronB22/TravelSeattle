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
                            <Card className='travelCard' onClick={()=>{
                            window.location.assign('https://www.portseattle.org/sea-tac')
                        }}>
                                <h3 className='travelSubHeader'>Seattle Tacoma International Airport</h3>
                                <img src={require('../../assets/SEA.jpg')} className='cardImg' alt= ' Seattle Tacoma International from the air'/>
                                <div className='travelText'>
                                Seattle's main airport! Serving as the cities internation airport, "Sea-Tac" provided routes from all around the world! Most major US arilines go here, and many internation Airlines.
                                </div>
                            </Card>
                        
                        </Col>
                        <Col>
                            <Card className='travelCard' onClick={()=>{
                            window.location.assign('https://www.painefield.com/')
                        }}>
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
                            <Card className='travelCard' onClick={()=>{
                            window.location.assign('https://www.amtrak.com/stations/sea')
                        }}>
                                <h3 className='travelSubHeader'>Amtrak</h3>
                                <img src={require('../../assets/amtrak.jpg')} className='cardImg' alt='Amtrak Train in the snow'/>
                                <div className='travelText'>
                                    Amtrak is a major rail service in the United States. In Seattle, Amtrak goes to King Street Station! Taking Amtrak to Seattle is a great way to see the Pacific Northwest! May not be has fast as a plane, but you wil lbe treated to amazing views!
                                </div>
                            </Card>
                        
                        </Col>
                        <Col>
                        <Card className='travelCard' onClick={()=>{
                            window.location.assign('https://wsdot.com/Travel/Real-time/Map/')
                        }}>
                                <h3 className='travelSubHeader'>Interstates</h3>
                                <img src={require('../../assets/I90.jpg')} className='cardImg' alt='I-90 goive over Lake Washingtion'/>
                                <div className='travelText'>
                                    Want to travel by car? Well your in luck! Seattle is easy to drive to by Interstate! With I-5 connecting the city all the way south to LA and all the way north to Vancouver Canada. As well ass I-90 connecting the city all the way to Boston!
                                </div>
                            </Card>
                        
                        </Col>
                    </Row>
                </div>
                <div>
                <h2 className='TravelCatHeader'>Local Travel</h2>
                <Row>
                        <Col>
                            <Card className='travelCard' onClick={()=>{
                            window.location.assign('https://www.soundtransit.org/ride-with-us/routes-schedules/1-line?direction=0&at=1654758000000&view=table&route_tab=schedule&stops_0=1_990006%2C1_99913&stops_1=1_99914%2C1_990005')
                        }}>
                                <h3 className='travelSubHeader'>Link Light Rail</h3>
                                <img src={require('../../assets/lightrail.jpg')} className='cardImg' alt='Amtrak Train in the snow'/>
                                <div className='travelText'>
                                    Link Light Rail is Seattle's lightrail service. Providing service from Sea-Tac Airport to the City! With up to 25 stations and more coming every year, the lightrail is a great way to get around the city
                                </div>
                            </Card>
                        
                        </Col>
                        <Col>
                        <Card className='travelCard' onClick={()=>{
                            window.location.assign('https://kingcounty.gov/depts/transportation/metro/travel-options/bus.aspx')
                        }}>
                                <h3 className='travelSubHeader'>Bus Service</h3>
                                <img src={require('../../assets/Bus.jpg')} className='cardImg' alt='Amtrak Train in the snow'/>
                                <div className='travelText'>
                                   Seattle has one of the best bus services in the country! Busses can take you to all the major spots of Seattle! Connecting you from lightrail stations to major points of interests all across the city.
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