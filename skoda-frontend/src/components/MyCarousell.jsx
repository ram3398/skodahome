import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import image8 from '../assets/images/image8.png'
import image9 from '../assets/images/image9.png'
import image10 from '../assets/images/image10.png'
import image11 from '../assets/images/image11.png'
import image12 from '../assets/images/image12.png'

function MyCarousell() {
    return (
        <div>
            <Carousel className='w-100 my-3' data-bs-theme="dark" >
                <Carousel.Item>
                    <Container fluid className="images">
                        <Row md={5} xs={2} className='align-items-end my-3'>
                            <Col className='mt-1'><img width='100%' src={image4} alt="" /></Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image5} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image6} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image7} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image8} alt="" />
                            </Col>
                        </Row>
                        <Row md={5} xs={2} className='align-items-start'>
                            <Col className='mt-1'><img width='100%' src={image9} alt="" /></Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image10} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image11} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image12} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image12} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="images">
                        <Row md={5} xs={2} className='align-items-end my-3'>
                            <Col className='mt-1'><img width='100%' src={image4} alt="" /></Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image5} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image6} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image7} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image8} alt="" />
                            </Col>
                        </Row>
                        <Row md={5} xs={2} className='align-items-start'>
                            <Col className='mt-1'><img width='100%' src={image9} alt="" /></Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image10} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image11} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image12} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image12} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="images">
                        <Row md={5} xs={2} className='align-items-end my-3'>
                            <Col className='mt-1'><img width='100%' src={image4} alt="" /></Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image5} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image6} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image7} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image8} alt="" />
                            </Col>
                        </Row>
                        <Row md={5} xs={2} className='align-items-start'>
                            <Col className='mt-1'><img width='100%' src={image9} alt="" /></Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image10} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image11} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image12} alt="" />
                            </Col>
                            <Col className='mt-1'>
                                <img width='100%' src={image12} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default MyCarousell
