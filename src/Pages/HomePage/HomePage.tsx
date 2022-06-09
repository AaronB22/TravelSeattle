import type { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Homepage.scss'
import Footer from '../../Components/Footer/Footer';

const HomePage:FC=()=>{

    return(
        <>
            <div>
                <img src={require('../../assets/cityImg1.png')} className='homeImg' />
                <div className='imgBlackout'></div>
                <div className='titleBox'>
                    Seattle Awaits You
                </div>
            </div>
            <div className='AboutDiv about' id='about'>
                <h2 className='aboutTitle'>About Seattle</h2>

                <div className='subTitle'>Welcome to one of the most beatiful and adventurous cities in the world!</div>

                <div className='aboutCat'>
                    <h3 className='aboutCatTitle'>A little History</h3>
                    <p className='aboutPar'>
                    Seattle is a beatiful and diverse city with a rich history . First inhabited by the Native Americans, the native people have a strong and rich history here that can still be seen today! The city would even gets its name from its Native American roots. Seattle was named after Chief Seattle. Seattle is know for its history of timber, massive port, its aviation industry, and now its software industry. The Greater Seattle area is home to many world famous companies, such as, Boeing, Microsoft, Amazon, and Starbucks!
                    </p>
                </div>
                <div className='aboutCat'>
                    <h3 className='aboutCatTitle'>Seattle's Culture</h3>
                    <Row>
                        <Col>
                            <h4>Famous Music Star's</h4>
                            <ul>
                                <li>Nirvana</li>
                                <li>Foo Fighters</li>
                                <li>Macklemore</li>
                                <li>Heart</li>
                                <li>Pearl Jam</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Sports Teams</h4>
                            <ul>
                                <li>Mariners (Baseball)</li>
                                <li>Seahawks (American Football)</li>
                                <li>Sounders FC (Soccer)</li>
                                <li>Kraken (Hockey)</li>
                                <li>Storm (Women's Basketball)</li>
                            </ul>
                        
                        </Col>
                    </Row>
                </div>
                <div className='bottomRow'>
                    <Row>
                        <Col>
                            <div className='aboutCard'>
                                <img src={require('../../assets/lightrail.jpg')} className='bottomAboutImg'/>
                                <div className='bottomImgBlackout'></div>
                                <div className='acTitle'>Travel</div>
                            </div>
                        
                        </Col>
                        <Col>
                        <div className='aboutCard'>
                                <img src={require('../../assets/PikePlaceMarket.jpg')} className='bottomAboutImg'/>
                                <div className='bottomImgBlackout' onClick={()=>window.location.assign('/sights')}></div>
                                <div className='acTitle' onClick={()=>window.location.assign('/sights')}>Sights</div>
                            </div>
                        
                        </Col>
                    </Row>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage;