import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Mynavbar from './Mynavbar'
import Footer from './Footer'
import MyCarousel from './MyCarousel'
import MyCarousell from './MyCarousell'
import MyCarouselll from './MyCarouselll'
import Products from './Products'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'
import image13 from '../assets/images/image13.jpeg'

function Home() {
    const srcs = ['https://s3-alpha-sig.figma.com/img/1974/2649/887208e0dcfbf6efe8e0c56f51df5382?Expires=1696204800&Signature=ph7z1wL7145k1EyEbVilYChJEc8DUk1Oe2UjvjBE889-4fOqL-LFw5f5Sq3~r00K~CQB9S-44i2xznL27imBhIfczcnQnsFjEXJDOrH2Wxjd-IgSaamPnAn4~12Hcz7xwu9nvDgmrjaTzHkNV3TeTD85ybCfTwJyYNd7btJin24Roeq8l-lvO1B6KxbrrX7tBj5FcQeB5r4Gz2dHexLK~nipls64mOkRvDqioLQk3rVoNFqUvcn99nnNK0V~XO8tiaAr9dN8qN47uQJdFiM5Apg-hsvEOHq140kg7JxLXbnvEZMYu4G7TM2AdTbxFW48ZXtFxxjfrK7Qx2sLYVXweg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/1173/c836/726d7e8cae2697124f4179dce3594569?Expires=1696204800&Signature=hT3d1mrnER0wLsmbbU7JzTeLjbw-whHP0wDFpUUrZUplTlI4jReQb5wmIAKT-rkYIxou2nXnpuqiesRPp3dIW2w5JUhINgmK6gbYJONvcQV2Cl8fEuyBQmNiSHMe8VibGAbs-5C3~lGp4zfqmOwhXiLsjzuP1VdoAH3OXWJTXyb9g0jMcSP9jxy5Nw5XbxpRrhMZ4ksL0MgvQLrwyc6DUS29FygCsk9tEUbuc4NmquUUd1Dd9vA~HvufOqzxyIPzce2NjbUPNeojHZooXxbEpXkCToxb~PeHUL5Wfb3t5LY8LFs6EJolfK~DrrqECHW3izG-2sc5P8CLMtg0XNppQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0ad2/242b/c496a7f5304d7fd3c14603f3551b2e3b?Expires=1696204800&Signature=N7yn~wEXqzV7HlcZ~5o1psTAhfY68IB-8aE85HCntvXUZ6Scm3uaLqT2um2Y-7Hp-lRgJAqcv53yFxcJIMGB27ksqHRoE8zPcnLsk3yIYmEgUxR7MV5s6xB~AxlNsBDyCJYcNvgpi~EMNA7k7ifz~x2e7SZjTFYydIHDAJKZ3Bs1KGN6wzTdrJtkKV4H6JH3zcFlB0BmkC15-wJh96n9ncR8Zv8V9-uCcCJ3Ekq6PitT0RDLJrHp~9xI-FaOIpPHqy6yuJmscQ2b~P~nHLpfU9~ABYEYf6CXOn~HRd6v257Xvwzg9SJsGEO3q-WyRoie~~gsm9OpFIGRpgpUg8YlMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/da02/be72/c285fe376c20d5aeeaadc54c1acaf72f?Expires=1696204800&Signature=NoaRWCRG20LtXZuF4uHmPel5hnoZ9VrxIh7dB6FQJ2Bve2Po~HeJfHdL5chrHGXsivSopQF-vcGI8WVShGmeKlhcEo8MKVsKSVHOdjuHkv4SDbO7h9lMJaYcUYSSMgnpZznsJ1FTFtxuSsuOqWzmmNuvSNOv~62uxTSWOdv3YTDFljNfYE5aRfIgwYB~2V59GcCfe6FwWJu1uN29GDWw0muu8wSFeUpeH1u4K2-tRiDRFsxATUx818HF66jZvpBd0ddClosTCUpIIx9vtEQnPAsMJGkSn2PFrExqlh5qvgUDwnZRfFNqIoWrUbQB6acmLsplMS61fX3akz11BgGTlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ]
    const titles = [
        'Crafted by Love',
        'Creative Design',
        'Lots of Concept',
        'Smart Furniture',
    ]
    return (
        <>
            
            <Container fluid >
                <Row className='mb-3 w-100'>
                    <Col className='p-0'>
                        <MyCarousel />
                    </Col>
                    <Col className='p-0 w-100' >
                        <div className='img-tile my-3 p-4 text-start' style={{ minWidth: '105%' }} >
                            <div className="heading text-center">
                                Decorate Your Home With Furniture
                            </div>
                            <p className='img-para  mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin.
                                <div className='mt-3 text-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                                        <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#F1F1F1" />
                                    </svg>
                                </div>
                            </p>
                        </div></Col>
                </Row>
                <Container className='my-5 py-5 px-0' bg="light" data-bs-theme="light">
                    <Row className="justify-content-md-center">
                        <Col xs={12} lg="3" md='auto' className='my-3'>
                            <Row>
                                <Col className='m-0 p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                        <g clip-path="url(#clip0_606_42)">
                                            <path d="M32.903 2.84375C32.0495 2.84375 31.2494 3.07414 30.5593 3.47437V1.67188C30.5593 1.02469 30.0346 0.5 29.3874 0.5H10.6374C9.99016 0.5 9.46547 1.02469 9.46547 1.67188V3.48867C8.76992 3.07953 7.96063 2.84375 7.09695 2.84375C4.51227 2.84375 2.40945 4.94656 2.40945 7.53125C2.40945 9.50273 2.99367 11.4077 4.09891 13.0402C5.98047 15.8193 8.3007 16.5405 10.2206 17.3084C11.3277 20.0653 13.5663 22.2502 16.3589 23.2846L15.4948 28.7812H15.3249C13.3864 28.7812 11.8093 30.3584 11.8093 32.2969V38.1562H10.6374C9.99023 38.1562 9.46555 38.6809 9.46555 39.3281C9.46555 39.9753 9.99023 40.5 10.6374 40.5H29.3874C30.0346 40.5 30.5593 39.9753 30.5593 39.3281C30.5593 38.6809 30.0346 38.1562 29.3874 38.1562H28.2155V32.2969C28.2155 30.3584 26.6384 28.7812 24.6999 28.7812H24.5301L23.666 23.2847C26.4627 22.2487 28.7038 20.0591 29.8092 17.2966C31.6229 16.5711 34.0003 15.8478 35.9012 13.0402C37.0064 11.4077 37.5906 9.50266 37.5906 7.53125C37.5905 4.94656 35.4877 2.84375 32.903 2.84375ZM9.4568 14.4787C6.59945 13.3357 4.7532 10.6087 4.7532 7.53125C4.7532 6.23891 5.80461 5.1875 7.09695 5.1875C8.3893 5.1875 9.4407 6.23891 9.4407 7.53125C9.4407 7.61367 9.44938 7.69398 9.46555 7.77156V13.3906C9.46555 13.7673 9.48578 14.1392 9.52453 14.5058L9.4568 14.4787ZM25.8718 38.1562H14.153V35.8125H25.8718V38.1562ZM24.6999 31.125C25.3461 31.125 25.8718 31.6507 25.8718 32.2969V33.4688H14.153V32.2969C14.153 31.6507 14.6788 31.125 15.3249 31.125C15.9607 31.125 23.2089 31.125 24.6999 31.125ZM17.8673 28.7812L18.6427 23.8487C19.0912 23.9071 19.5483 23.9375 20.0124 23.9375C20.4766 23.9375 20.9337 23.907 21.3821 23.8487L22.1576 28.7812H17.8673ZM28.2155 13.3906C28.2155 17.9138 24.5356 21.5938 20.0124 21.5938C15.4892 21.5938 11.8093 17.9138 11.8093 13.3906V7.53125H28.2155V13.3906ZM28.2155 5.1875H11.8093V2.84375H28.2155V5.1875ZM30.5431 14.4787L30.5015 14.4953C30.5395 14.1322 30.5592 13.7637 30.5592 13.3906V7.53125C30.5593 6.23891 31.6107 5.1875 32.903 5.1875C34.1954 5.1875 35.2468 6.23891 35.2468 7.53125C35.2468 10.6087 33.4005 13.3358 30.5431 14.4787Z" fill="#3A3A3A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_42">
                                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Col>
                                <Col className='m-0 p-0 text-start'>
                                    <div className='icon-head'>High Quality</div>
                                    <div className='icon-tag'>crafted from top materials</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg="3" md='auto' className='my-3'>
                            <Row>
                                <Col className='m-0 p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                        <g clip-path="url(#clip0_606_50)">
                                            <path d="M37.8573 14.6741C37.3295 13.0397 37.5545 10.5864 36.1827 8.69207C34.8 6.78286 32.3952 6.2402 31.0373 5.24707C29.6938 4.26442 28.4438 2.12606 26.1837 1.38856C23.9873 0.67184 21.7414 1.64442 20 1.64442C18.2588 1.64442 16.013 0.671606 13.8163 1.38848C11.5566 2.12582 10.3056 4.26465 8.96289 5.24684C7.60648 6.23879 5.19992 6.78293 3.8175 8.69184C2.4468 10.5846 2.66953 13.0436 2.14266 14.674C1.64125 16.2258 0 18.0882 0 20.5001C0 22.9135 1.63938 24.7687 2.14266 26.3261C2.67047 27.9605 2.44547 30.4139 3.81734 32.3082C5.19992 34.2175 7.60461 34.76 8.96266 35.7532C10.306 36.7357 11.5562 38.8743 13.8163 39.6117C16.0112 40.3279 18.2606 39.3558 20 39.3558C21.737 39.3558 23.9916 40.3269 26.1837 39.6118C28.4434 38.8744 29.6937 36.7361 31.0371 35.7534C32.3935 34.7614 34.8001 34.2173 36.1825 32.3084C37.5533 30.4156 37.3304 27.9568 37.8573 26.3262C38.3587 24.7743 40 22.9119 40 20.5001C40 18.0869 38.361 16.2322 37.8573 14.6741ZM34.8838 25.3653C34.2686 27.2696 34.4298 29.4007 33.6516 30.4753C32.863 31.5641 30.7913 32.0614 29.1926 33.2308C27.6114 34.3871 26.5032 36.2202 25.2143 36.6407C23.9949 37.0387 22.0077 36.2307 20.0001 36.2307C17.9777 36.2307 16.011 37.0404 14.7858 36.6407C13.497 36.2202 12.3904 34.3884 10.8075 33.2307C9.21828 32.0685 7.13469 31.5609 6.34836 30.4751C5.57273 29.4042 5.72781 27.2582 5.11633 25.3654C4.51695 23.5107 3.125 21.9049 3.125 20.5001C3.125 19.094 4.5157 17.4936 5.11617 15.635C5.73141 13.7307 5.57023 11.5994 6.34836 10.525C7.13648 9.43684 9.20984 8.93786 10.8075 7.76942C12.3937 6.60934 13.4949 4.78067 14.7856 4.3595C16.004 3.962 17.9977 4.76957 19.9999 4.76957C22.0259 4.76957 23.9877 3.95926 25.2142 4.3595C26.5028 4.77997 27.6104 6.61247 29.1926 7.7695C30.7816 8.93176 32.8653 9.43934 33.6516 10.525C34.4274 11.5962 34.2715 13.74 34.8837 15.6348V15.6349C35.483 17.4895 36.875 19.0954 36.875 20.5001C36.875 21.9063 35.4843 23.5066 34.8838 25.3653ZM27.1987 15.4849C27.8089 16.0951 27.8089 17.0844 27.1987 17.6946L19.3779 25.5154C18.7677 26.1256 17.7783 26.1255 17.1681 25.5154L12.8014 21.1486C12.1912 20.5384 12.1911 19.5491 12.8013 18.9389C13.4116 18.3288 14.401 18.3287 15.011 18.9389L18.273 22.2008L24.9888 15.485C25.5991 14.8747 26.5884 14.8747 27.1987 15.4849Z" fill="#3A3A3A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_50">
                                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Col>
                                <Col className='m-0 p-0 text-start'>
                                    <div className='icon-head'>Warrany Protection</div>
                                    <div className='icon-tag'>Over 2 years</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg="3" md='auto' className='my-3'>
                            <Row>
                                <Col className='m-0 p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                        <g clip-path="url(#clip0_606_60)">
                                            <path d="M36.8986 21.2346V3.0198C36.8986 2.36997 36.3718 1.84314 35.7219 1.84314H4.19671C3.54688 1.84314 3.02005 2.36997 3.02005 3.0198V22.6867C2.45243 22.7694 1.89752 22.9898 1.40661 23.3542C-0.140929 24.4516 -0.506949 26.9073 0.789338 28.4218L6.08925 34.847C9.36993 38.6866 12.855 39.157 18.0359 39.157C22.4818 39.157 24.4695 39.1766 28.3443 38.2937L32.1173 37.3913C32.7291 38.2456 33.7003 38.799 34.7921 38.799H36.6508C38.4975 38.799 40 37.2163 40 35.2708V24.7523C40 22.8947 38.6299 21.3688 36.8986 21.2346ZM31.6097 23.6551L30.042 22.8588C27.4642 21.5577 24.4839 21.5095 21.8654 22.7269C21.151 23.0079 19.5929 23.9506 18.7847 23.9191H13.3445C11.5399 23.9191 10.0718 25.3872 10.0718 27.1918V28.0499C10.0617 28.0392 10.0511 28.0291 10.0411 28.0182L6.15616 23.8013C5.92106 23.5462 5.65694 23.3326 5.37345 23.1613V11.4874H15.0027V15.8007C15.0027 16.4505 15.5295 16.9773 16.1793 16.9773H23.6041C24.254 16.9773 24.7808 16.4505 24.7808 15.8007V11.4874H34.5453V21.2346C33.1705 21.3408 32.0242 22.3243 31.6097 23.6551ZM17.3559 11.4874H22.4274V14.624H17.3559V11.4874ZM34.5453 9.13404H24.7808V4.19646H34.5453V9.13404H34.5453ZM22.4275 4.19646V9.13412H17.356V4.19646H22.4275ZM15.0026 4.19646V9.13412H5.37337V4.19646H15.0026ZM27.7981 36.0046C24.2188 36.8244 22.063 36.7912 18.0781 36.7912C13.2146 36.7912 10.8646 36.7126 7.90476 33.3494L2.60485 26.9243C1.68297 25.7238 3.35273 24.3067 4.42537 25.3957L8.31031 29.6127C9.33706 30.6961 10.6291 31.2923 12.2216 31.3274H22.9926C23.6424 31.3274 24.1693 30.8006 24.1693 30.1507C24.1693 29.5009 23.6424 28.9741 22.9926 28.9741H12.425V27.1916C12.425 26.6847 12.8374 26.2722 13.3444 26.2722H18.7846C20.0102 26.36 21.7792 25.3366 22.8575 24.8607C24.8186 23.9489 27.0508 23.985 28.9789 24.9581L31.4431 26.2098V35.1326L27.7981 36.0046ZM37.6467 35.2707C37.6467 35.9186 37.2 36.4456 36.6509 36.4456H34.7922C34.2431 36.4456 33.7964 35.9186 33.7964 35.2707V24.7523C33.7964 24.1044 34.2432 23.5773 34.7922 23.5773H36.6509C37.2 23.5773 37.6467 24.1044 37.6467 24.7523V35.2707Z" fill="#3A3A3A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_60">
                                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Col>
                                <Col className='m-0 p-0 text-start'>
                                    <div className='icon-head'>Free Shipping</div>
                                    <div className='icon-tag'>Order over 150 $</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg="3" md='auto' className='my-3'>
                            <Row>
                                <Col className='m-0 p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                        <g clip-path="url(#clip0_606_67)">
                                            <path d="M36.4624 16.4752C36.1995 7.62165 28.9161 0.5 20 0.5C11.0838 0.5 3.80043 7.62165 3.53745 16.4752L2.35291 17.6598V25.6932L3.52938 26.8696V32.3431C3.52938 35.5435 6.13298 38.1471 9.3333 38.1471H10.7906C11.2762 39.5164 12.5839 40.5 14.1176 40.5H16.4706C18.0053 40.5 19.3137 39.515 19.7986 38.1442C19.8658 38.1454 19.9331 38.1471 20 38.1471C25.6814 38.1471 30.4351 34.0987 31.5281 28.7353H34.6049L37.647 25.6932V17.6598L36.4624 16.4752ZM20 2.85294C26.9828 2.85294 32.7969 7.94933 33.9204 14.6176H31.5281C30.4351 9.2542 25.6814 5.20588 20 5.20588C14.3186 5.20588 9.56483 9.2542 8.47181 14.6176H6.07949C7.20302 7.94933 13.0171 2.85294 20 2.85294ZM29.1139 14.6176C25.3109 14.6063 22.6246 14.8379 20.4098 11.6004L19.3344 10.0284L18.4102 11.6938C17.0635 14.1204 15.2499 14.6176 12.9411 14.6176H10.886C11.9335 10.5629 15.6225 7.55882 20 7.55882C24.3775 7.55882 28.0665 10.5629 29.1139 14.6176ZM8.23526 26.3824H6.36961L4.70585 24.7186V18.6344L6.36961 16.9706H8.23526V26.3824ZM5.88232 32.3431V28.7353H8.46953C8.91244 30.9294 9.97212 32.9435 11.542 34.5611C11.2129 34.9127 10.9548 35.3311 10.7906 35.7941H9.3333C7.4304 35.7941 5.88232 34.246 5.88232 32.3431ZM16.4706 38.1471H14.1176C13.4688 38.1471 12.9411 37.6194 12.9411 36.9706C12.9411 36.3219 13.4688 35.7941 14.1176 35.7941H16.4706C17.1193 35.7941 17.647 36.3219 17.647 36.9706C17.647 37.6194 17.1193 38.1471 16.4706 38.1471ZM29.4117 26.3824C29.4117 31.572 25.1896 35.7941 20 35.7941C19.9325 35.7941 19.8645 35.7928 19.7966 35.7912C19.3102 34.4234 18.0032 33.4412 16.4706 33.4412C14.0549 33.4465 14.0934 33.4291 13.7923 33.4568C11.7498 31.6665 10.5882 29.1166 10.5882 26.3824V16.9706H12.9411C15.0233 16.9706 17.5589 16.6273 19.5218 14.2384C22.1116 16.9524 25.2764 16.9706 28.1175 16.9706H29.4117V26.3824ZM35.2941 24.7186L33.6303 26.3824H31.7647V16.9706H33.6303L35.2941 18.6344V24.7186Z" fill="#3A3A3A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_67">
                                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Col>
                                <Col className='m-0 p-0 text-start'>
                                    <div className='icon-head'>24 / 7 Support</div>
                                    <div className='icon-tag'>Dedicated support</div>
                                </Col>
                            </Row>
                        </Col>



                    </Row>
                </Container>
            </Container>
            <Container className='my-5 py-5'>
                <Row xs={1} md={3} className='text-start'>
                    <Col className='my-3 text-center'>
                        <div className='idg'>Interesting Design & Great Look</div>
                        <div className='text-center mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                                <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#191B1D" />
                            </svg>
                        </div>
                    </Col>
                    <Col className='my-3'>
                        <div className="lorem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin
                        </div></Col>
                    <Col className='my-3'>
                        <div className="lorem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin
                        </div></Col>
                </Row>
            </Container>
            <Container>
                <Row xs={1} md={2}>

                    <Col className='p-0 m-0'>
                        <div className='contnr text-start'>
                            <img width={'100%'} src={image2} alt="Snow"></img>
                            <div class="bottom-right">
                                <div className="best">
                                    Great Sofa
                                </div>
                                <div className="best-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='p-0 m-0 my-3'>
                        <div className="imagination text-start px-3">
                            Your Imagination is Our Best Solution
                            <div className='mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                                    <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#191B1D" />
                                </svg>
                            </div>
                        </div>
                        <Row className='p-0 m-0' >
                            <Col className='p-0 m-0 contnr' style={{ height: '168px' }}>
                                <div className="bottom-left">
                                    <img width={'160px'} height={'160px'} src={image3} alt="" />
                                </div>
                            </Col>
                            <Col className=' py-3 text-start'>
                                <div className="dots my-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 15" fill="none">
                                        <circle cx="7.5" cy="7.5" r="7.5" fill="#191B1D" />
                                    </svg></span>
                                    <span className='dot-matter'>
                                        Make your design style
                                    </span>
                                </div>
                                <div className="dots my-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 15" fill="none">
                                        <circle cx="7.5" cy="7.5" r="7.5" fill="#191B1D" />
                                    </svg></span>
                                    <span className='dot-matter'>
                                        Comfort your home
                                    </span>
                                </div>
                                <div className="dots my-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 15" fill="none">
                                        <circle cx="7.5" cy="7.5" r="7.5" fill="#191B1D" />
                                    </svg></span>
                                    <span className='dot-matter'>
                                        New look, new taste
                                    </span>
                                </div>
                                <div className="dots my-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 15" fill="none">
                                        <circle cx="7.5" cy="7.5" r="7.5" fill="#191B1D" />
                                    </svg></span>
                                    <span className='dot-matter'>
                                        Happy sale furniture
                                    </span>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="for-people mx-auto my-5">
                For People Who Love Their Home
            </div>
            {/* <Container>
                <div className="our-products text-start">
                    Our Products
                </div>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                        <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#191B1D" />
                    </svg>
                </div>
                <Row xs={1} md={4} className="g-4 mt-3">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx} className='my-5'>
                            <Card className='border border-0'>
                                <Card.Img variant="top" src={srcs[idx % 4]} height={'250px'} />
                                <Card.Body>
                                    <Card.Title className='mt-2'>{titles[idx % 4]}</Card.Title>
                                    <Card.Text className='mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit condimentum adipisc
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <a href='/products' class="btn btn-light border rounded-0">Show More</a>
                <div className="share mt-5">Share your setup with</div>
                <div className="hash my-2">#skodahomedecors</div>

            </Container> */}
            <Products/>
            <MyCarousell />
            <Container fluid className='my-5 mx-0'>
                <Row xs={1} md={2}>
                    <Col className='px-0'>
                        <img width={'100%'} src={image13}alt="" />
                    </Col>
                    <Col className='px-0' >
                        <div className="bg-dark p-5 text-start">
                            <div className="furn  ">Furniture Change Your Live</div>
                            <div className="furn-para text-start my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet  entum adipiscing sapien proin. r condimentum adipiscin  adipiscing sapien proin. Aliquet amet  scing sapien proin. r condimentum adipiscin  adipiscing sapien proin.
                            </div>
                            <a href='/contact' type="button" class="btn btn-dark border rounded-0">Details</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-5 px-0'>

                {/* <Row className='text-start'>
                    <Col>
                        <Card className='border border-0'>
                            <Card.Img variant="top" src='https://s3-alpha-sig.figma.com/img/53ab/ba51/c795f73b89eadbfba6f49c31e29633ca?Expires=1696204800&Signature=eYZfAfVcox9uh1Pmuaqzd7tc4Hqjfic-svEPnnRYMr7s73Popl0j-1c1QOMiPcx5YiL9FJgDZnbVF7NXx1NslY772fv1JRn4wqt3zlylc3BmHT7zN~xm6Vg4VGeeceMzpWALWxdO1wQ8IqXxX-exB2ENa0uP3BCbuwC5~o0bP6B34-DJWx4i1PsW5gNiTPQdSd2dM9GspSnmJ~pLS13-wz2rDij4beAQPxPejSh-jIgXZ2AqWPVov1Anaxneo801faufvpEWaBAHjTR7n92v-Acv~cBcceydI6zErLi3u3TZ756KkTaBeABTHalwdgl84imB9kbEIhZNUfYyiU0hbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' height={'350px'} />
                            <Card.Body>
                                <Card.Title className='mt-2'>SKODA Home Decors Kollengode</Card.Title>
                                <Card.Text className='mt-2'>
                                    Directions
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border border-0'>
                            <Card.Img variant="top" src='https://s3-alpha-sig.figma.com/img/0019/9a02/de519eea2e3d7e620bfce30dd47c94ae?Expires=1696204800&Signature=krBQMBCBd6y8Z7YbI22kNQ4wh8QJp6SCYfSG4vt~cnUTsp7F6ehKC7~hH1LII6kLNKCjF6sOcdUnSMTjSEmU4~GQtPrtUnDCaN1S0yAAC7If6nGTKnXcJAYjqsemS-aapfbuiFw434ruY4iaYRZtVFJwBSfPm~AQC4uegYDYfJiNQGr2rUbMAxR~mByOCd9-0SlBp~qPZtsqo0kBVMyigYDe1r9fLqqg7pAOB9Fqoz7r4Xm6gVFN2qYGLbk7LzLS47vYRYUPU~9sFZcRLdZoBmcit1t8V0u0w58tVa4-xhdvlDs-~dkz-aJe13541xbuwp8jM5yJ4iR48ZrLLTY48A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' height={'350px'} />
                            <Card.Body>
                                <Card.Title className='mt-2'>SKODA Home Decors
                                    Vadavanur</Card.Title>
                                <Card.Text className='mt-2'>
                                    Directions
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
                <MyCarouselll />
            </Container>
            <Container fluid className='p-5' style={{backgroundColor:'rgba(25, 27, 29, 0.53)'}}>
                <Row xs={1} md={4}>
                    <Col className='my-3'>
                        <div className="num">215</div>
                        <div className="num-line">Coworkers</div>
                    </Col>
                    <Col className='my-3'>
                        <div className="num">300</div>
                        <div className="num-line">Desks</div>
                    </Col>
                    <Col className='my-3'>
                        <div className="num">80</div>
                        <div className="num-line">Booths</div>
                    </Col>
                    <Col className='my-3'>
                        <div className="num">50</div>
                        <div className="num-line">Rooms</div>
                    </Col>

                </Row>
            </Container>
            
        </>
    )
}

export default Home
