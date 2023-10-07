import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
function Timber() {
    return (
        <div>

            <Container fluid>
                <Row className='about-row ' xs={1} md={2}>
                    <Col></Col>
                    <Col className='p-5'>
                        <div className="about text-start p-5">
                            <div className="about-us my-3">
                                Spaces
                            </div>
                            <div className="about-para text-white my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin.
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                                    <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#F1F1F1" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='my-5'>


                <div className="we w-50 mx-auto my-5">
                    We Design Furniture With Love
                </div>
                <div className="my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                        <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#191B1D" />
                    </svg>
                </div>
                <div className="lorem my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin
                </div>
                <a href='/contact' className='btn btn-secondary'>Join Now</a>
                <Row xs={1} md={2} className='my-5'>
                    <Col className=' m-0 p-0'>
                        <img width={'100%'} height={'500px'} src="https://s3-alpha-sig.figma.com/img/018b/948f/2cbabfe7b00e0f3318fe4ab61a54098e?Expires=1696809600&Signature=ODHbXu44H9mtrd9u-V7DEfrN4qncBhEj454kymSjxNdOl-FG5EZZk1tqYQBqFdlO5c5Qw60C7o6mG4Aq6BVazbWAZhfZcnD-cKNGsCy1B808pln0zLcnb-piEdOUmaALx4Bz2bOODxrCTslyWMcc2~~UNXyIzdncjy0GL6vcEHGLfKDnEVQylDp7vhzXq0S2~3vYvTnTQaCl2qvepHNkkymFsrlj6Zz95RhMoe1zjKsEulR5Tvh~TPJ~K5i47xpEBe5NZYmJ5s2X7S7S-YPHTCt3wpfQz3h11vdmSkuJnJiqg4JBhN6DGri~rLx3n-sMiRLAXB6q~dnNsnHu5OH19g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </Col>
                    <Col className='bg-dark text-start text-white p-5 m-0'>
                        <div className="our text-start mb-4">Our Design For Your Lifestyle</div>
                        <div className="dots my-2 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '}  Make your design style
                            </span>
                        </div>
                        <div className="dots my-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '}  Comfort your home
                            </span>
                        </div>
                        <div className="dots my-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '} New look, new taste
                            </span>
                        </div>
                        <div className="dots my-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '} Happy sale furniture
                            </span>
                        </div>
                        <div className=" mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos voluptate ab temporibus, commodi quos, alias similique unde vel omnis hic. Nesciunt nobis ipsa saepe, perspiciatis laboriosam dolorem odio expedita iusto fuga ea ipsam voluptatem corrupti unde sit temporibus quasi nulla illum laborum fugit!
                        </div>
                    </Col>
                </Row>

            </Container>


        </div>
    )
}

export default Timber
