import React from 'react'
import Mynavbar from './Mynavbar'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
    return (
        <div>
           
            <Container fluid>
                <Row className='about-row ' xs={1} md={2}>
                    <Col></Col>
                    <Col className='p-5'>
                        <div className="about text-start p-5">
                            <div className="about-us my-3">
                                About Us
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
                <Row xs={1} md={2} className='my-5'>
                    <Col>
                        <img width={'100%'} src="https://s3-alpha-sig.figma.com/img/86c7/1d3f/1123242648e295ba691dd366b3ebe8df?Expires=1696204800&Signature=DCTU92iAUPwxHesisBTn3gU0awrkHF86QSzmfGiTIMbjnVFVTqPcbN8Uh~ALYXIZcdYOqh245~ycg5NxHzcC1ZkXVltOViaI~KslIqyBIkUu8YI51gvS-O3SWjUhpbkXIGJRmg7IQoMXzNqDEm0eHIMkZqK8qs2yZid1o36eR4Xp4Pw8eAF9XjxvmLl6RD2C1TTf3vc736zjPc0vZaOj2BXw4OWPQhxbkmH7Ln~zsCDl6z9Zb7eA3L5eK1IeU--sK-O~9~YlQqysFK~ZXBo1IaQNzUNl7Vdf2BCTILDEIM2GvhkcxuPp~YWRUOvRUweKFUyU3dsS4Xa4LXIQYytk3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </Col>
                    <Col className='px-2'>
                        <Row className='my-3'>
                            <Col>
                                <div className="yellow">
                                    215+
                                </div>
                                <div className="b-yellow">
                                    Product
                                </div>

                            </Col>

                            <Col>
                                <div className="yellow">
                                    122
                                </div>
                                <div className="b-yellow">
                                    Store
                                </div>
                            </Col>
                            <div className="p-yellow text-start my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <div className="yellow ">
                                    892+
                                </div>
                                <div className="b-yellow">
                                    Worker
                                </div>

                            </Col>
                            <Col>
                                <div className="yellow">
                                    68
                                </div>
                                <div className="b-yellow">
                                    Model
                                </div>

                            </Col>
                            <div className="p-yellow text-start my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin
                            </div>
                        </Row>
                    </Col>
                </Row>

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
            </Container>
            <Container fluid style={{backgroundColor:'#CFDBE4 '}} className='p-5' id='touch'>
                <Row xs={1} md={2} className='bg-light rounded'>
                    <Col className='p-4'>
                        <form className='text-start' >
                            <h1 className="">
                                Get in <span className="text-info">touch</span>
                            </h1>
                            <p>
                                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                                molestie vel, ornare non id blandit netus.
                            </p>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Contact name" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="exampleInputEmail2"  placeholder="Street" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="exampleInputEmail3"  placeholder="City" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="exampleInputEmail4"  placeholder="Contact mobile" />
                            </div>
                            <div className="form-group my-2">
                                <input type="email" className="form-control" id="exampleInputEmail5"  placeholder="Enter email" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="exampleInputEmail6"  placeholder="Let's talk about your idea" />
                            </div>
                            <div className="form-group my-2">
                                <input type="file" className="form-control" id="exampleInputEmail7"  placeholder="Let's talk about your idea" />
                            </div>
                            <a href="mailto:someone@example.com" className="btn w-100 btn-primary">Submit</a>
                            <Row className='my-3'>
                                <Col className='mx-3'>
                                    <Row className=''>
                                        <Col>
                                            <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                                <path d="M16.2047 0.424316V2.35275C18.1121 2.35275 19.899 2.83486 21.5654 3.79908C23.1516 4.74321 24.4165 6.00875 25.3601 7.59569C26.3238 9.26299 26.8057 11.0508 26.8057 12.9592H28.7332C28.7332 10.6892 28.1609 8.58 27.0165 6.63147C25.9122 4.74321 24.4165 3.24666 22.5292 2.14183C20.5816 0.996821 18.4735 0.424316 16.2047 0.424316ZM6.23611 3.31697C5.69401 3.31697 5.22219 3.48772 4.82064 3.82921L1.71863 6.99305L1.80898 6.93279C1.30704 7.35464 0.97576 7.87692 0.815138 8.49965C0.674594 9.12237 0.71475 9.72501 0.935604 10.3076C1.49778 11.8744 2.25069 13.4814 3.19434 15.1286C4.51947 17.3986 6.09557 19.4375 7.92264 21.2454C10.854 24.1983 14.4981 26.5285 18.8549 28.236H18.8851C19.4673 28.4369 20.0496 28.477 20.6318 28.3565C21.2341 28.236 21.7662 27.9748 22.228 27.5731L25.2698 24.5298C25.6713 24.128 25.8721 23.6359 25.8721 23.0533C25.8721 22.4507 25.6713 21.9485 25.2698 21.5467L21.3245 17.5693C20.9229 17.1676 20.421 16.9667 19.8187 16.9667C19.2163 16.9667 18.7144 17.1676 18.3128 17.5693L16.4155 19.4978C14.8896 18.7746 13.5645 17.8807 12.4401 16.816C11.3158 15.7313 10.4223 14.4155 9.75975 12.8688L11.6872 10.9403C12.1088 10.4984 12.3196 9.97611 12.3196 9.37347C12.3196 8.75074 12.0787 8.24855 11.5969 7.86688L11.6872 7.95727L7.65159 3.82921C7.25003 3.48772 6.77821 3.31697 6.23611 3.31697ZM16.2047 4.28119V6.20963C17.4294 6.20963 18.5538 6.51095 19.5777 7.11358C20.6218 7.71622 21.445 8.53982 22.0473 9.58439C22.6496 10.6089 22.9508 11.7338 22.9508 12.9592H24.8782C24.8782 11.3923 24.4867 9.93593 23.7037 8.59004C22.9207 7.28433 21.8766 6.23976 20.5716 5.45633C19.2264 4.6729 17.7707 4.28119 16.2047 4.28119ZM6.23611 5.24541C6.29635 5.24541 6.36662 5.27554 6.44693 5.3358L10.3922 9.37347C10.4123 9.45382 10.3922 9.52413 10.332 9.58439L7.47089 12.4168L7.6817 13.0194L8.07322 13.8631C8.39446 14.5461 8.7659 15.209 9.18753 15.8518C9.76978 16.7558 10.4123 17.5292 11.115 18.172C12.0586 19.096 13.193 19.9397 14.5182 20.703C15.1807 21.0847 15.7429 21.3659 16.2047 21.5467L16.807 21.8179L19.7283 18.8951C19.7685 18.8549 19.7986 18.8349 19.8187 18.8349C19.8387 18.8349 19.8689 18.8549 19.909 18.8951L23.9747 22.9629C24.0149 23.0031 24.035 23.0332 24.035 23.0533C24.035 23.0533 24.0149 23.0734 23.9747 23.1136L20.9631 26.0966C20.5214 26.4783 20.0395 26.5787 19.5175 26.398C15.4217 24.811 12.0084 22.6415 9.27788 19.8895C7.59136 18.2021 6.11565 16.2837 4.85075 14.1343C3.94726 12.5875 3.24454 11.091 2.7426 9.64466V9.61452C2.66228 9.43373 2.65225 9.22281 2.71248 8.98176C2.77271 8.72061 2.88314 8.51973 3.04376 8.37912L6.0253 5.3358C6.08553 5.27554 6.1558 5.24541 6.23611 5.24541ZM16.2047 8.13806V10.0665C17.0078 10.0665 17.6904 10.3477 18.2526 10.9102C18.8148 11.4727 19.0959 12.1556 19.0959 12.9592H21.0233C21.0233 12.0954 20.8025 11.2919 20.3608 10.5486C19.9391 9.80536 19.3569 9.22281 18.614 8.80096C17.8711 8.35903 17.068 8.13806 16.2047 8.13806Z" fill="black" />
                                            </svg>
                                        </Col>
                                        <Col>
                                            <h3>Phone</h3>
                                            <p className="text-danger">111 111 111</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path d="M7.95455 2.625V4.59624L1.75 8.63565V25.375H26.5682V8.63565L20.3636 4.59624V2.625H7.95455ZM10.0227 4.69318H18.2955V12.6428L14.1591 15.3249L10.0227 12.6428V4.69318ZM11.0568 6.76136V8.82955H17.2614V6.76136H11.0568ZM7.95455 7.0522V11.2855L4.6907 9.18501L7.95455 7.0522ZM20.3636 7.0522L23.6275 9.18501L20.3636 11.2855V7.0522ZM11.0568 9.86364V11.9318H17.2614V9.86364H11.0568ZM3.81818 11.0916L14.1591 17.7809L24.5 11.0916V23.3068H3.81818V11.0916Z" fill="black" />
                                            </svg>
                                        </Col>
                                        <Col>
                                            <h3>E-MAIL</h3>
                                            <p className="text-danger">info@company.com</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col className='p-5'>
                    <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31371.065275918438!2d76.67603123078405!3d10.627312358649865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba813a29688a78d%3A0x723a59b40ac5a8bd!2sSkoda%20Home%20Decor!5e0!3m2!1sen!2sin!4v1695829126546!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </Col>
                </Row>
                <>

                </>
            </Container>
            
        </div>
    )
}

export default About
