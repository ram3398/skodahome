import React, { useState } from 'react'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
import './MyCarouselll.css'
import image13 from '../assets/images/image13.jpeg'
import image14 from '../assets/images/image14.png'

function MyCarouselll() {
    const [isHovered, setIsHovered] = useState(false);
    const image1 = 'https://www.sarkarinaukriexams.com/images/editor/1691754246bird-g8b2ad9bcc_640.jpg';
    const image2 = 'https://www.sarkarinaukriexams.com/images/editor/1691754318flower-gf39467e8f_640.jpg'
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
    return (
        <div className="pt-3 p-5" style={{ backgroundColor: 'rgb(224, 219, 219)' }}>
            <div className="outlets my-5">Our Outlets</div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item className='pt-0'>
                    <Row className='text-start  outl'>
                        <Col className='my-1 mx-0'>
                            <Card className=' shadow-lg'>
                            {isHovered ?  null :null
                            
                            }
                                <Card.Img variant="top" src={image13} height={'300px'} />
                                <Card.Body>
                                    <Card.Title className='mt-2'>SKODA Home Decors Kollengode</Card.Title>
                                    <Card.Text className='mt-2'>
                                        Directions
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow-lg'>
                                <Card.Img variant="top" src={image14}height={'300px'} />
                                <Card.Body>
                                    <Card.Title className='mt-2'>SKODA Home Decors
                                        Vadavanur</Card.Title>
                                    <Card.Text className='mt-2'>
                                        Directions
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className='pt-0'>
                    <Row className='text-start  outl'>
                        <Col className='my-1 mx-0'>
                            <Card className=' shadow-lg'>
                            {isHovered ?  null :null
                            
                            }
                                <Card.Img variant="top" src={image13} height={'300px'} />
                                <Card.Body>
                                    <Card.Title className='mt-2'>SKODA Home Decors Kollengode</Card.Title>
                                    <Card.Text className='mt-2'>
                                        Directions
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow-lg'>
                                <Card.Img variant="top" src={image14}height={'300px'} />
                                <Card.Body>
                                    <Card.Title className='mt-2'>SKODA Home Decors
                                        Vadavanur</Card.Title>
                                    <Card.Text className='mt-2'>
                                        Directions
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default MyCarouselll
