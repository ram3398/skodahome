import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function VCarousel(props) {
    const prevSlide = () => {
        setCurrent((old) => {
            const result = (old - 1 + images.length) % images.length;
            return result;
        });
    };

    const nextSlide = () => {
        setCurrent((old) => {
            const result = (old + 1) % images.length;
            return result;
        });
    };

    const [images,setImages] = useState([
        'https://s3-alpha-sig.figma.com/img/3a4f/cae6/1a9c4f7a8984f4a4a6eea40019073c45?Expires=1696809600&Signature=gkOol03Dj4a3y9GNrSyfV7gxU3awepgXGYMhAQeqNCy5qjwfNmLzlHNmmjziZog5WG6lrC30-UpyLl4iYjegvOI66sFIU6MZz2aTNWBTHKPtdryU22qu~p6tKmvC~xkmIgKQcf2hhdTF2wprXYrVYpNnTBx5q3ROOZqvQnHooZj9BIxFulBGJCEJWEhsqN6m96~4OtCzWSVYC8gOgxMjH5tS6QbyHDGJgqlIhCRSYevYUl4Og2mwm36sdKZ-cwsW~ibnrQ42036H3Qrix-0Ni1jJkK~0k59ucY5GYJANStAXmXJnAkwPXOLLkn8MLnXjMLIFS5eDJdeR2Yq~fW7X9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/fc72/816c/14b7623798b36d1bba722cb3d0d77e74?Expires=1696809600&Signature=TIK6B88OjZzxaI53zWgy12bbmxmvMhKkE2K7Nq3muEqMdvNc-dy2FaWvyeGu8x8gOfD2Z5FXu3NHeQSj4kbRhmIzQYwBh-OMeNbJ8bnH9-hkVlcqU2IizXo~SC4hRwSBaKqP11y7B63-YEJQ75MsohAhxZWzZGZ-c9Q2QL2uewOacgSVuKOm7kiyAkWe8rJlyYgTxndEcGkXTVi3YQdMhMuI2vWfUpNTsAZ7F7oVK8LH8L7ThxT-1JC1HsJobfipvtM82kHDc4bO3P0cmbaFUHv777fBv9xyRBbnGJi6o8Y7c4Pexg6i05Dvj3LMOC4ki9arizYg8Psaee3-R0lsIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ac1/8ff7/dec7c03d3075bfd27ecb06f21fb988d0?Expires=1696809600&Signature=laE9KGUMf5YieWigvJnhjeRKP6y-yIZ5FqYLpibwC9Rqt82saeWR7hzCY6Gb05Ngu6s8XK0BMqOsruQdczaLW4gD0Sg9bYwFbZTacJ4-Nl6sWfwGDMl7HDrHu53Dkr9acuocTP0BpqazV76cYekkCNM1lkMi2ay-VH9wUr8WOaV~eGfX1iAHTJXgELxONrOU1cDszf7yZO0KD1cssEK8584rAOMlEeXn~MA4ZHe-au7ZpUWXf6ubAEcFQ7u6jWhtfUipfcG6om6MjxEwiWsaCISJaLHdPsOYjycFq-9AyTQaTHMfGj4qsIacJfgRCZEVkxXuPNFrr10VthU79uHYlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ac1/8ff7/dec7c03d3075bfd27ecb06f21fb988d0?Expires=1696809600&Signature=laE9KGUMf5YieWigvJnhjeRKP6y-yIZ5FqYLpibwC9Rqt82saeWR7hzCY6Gb05Ngu6s8XK0BMqOsruQdczaLW4gD0Sg9bYwFbZTacJ4-Nl6sWfwGDMl7HDrHu53Dkr9acuocTP0BpqazV76cYekkCNM1lkMi2ay-VH9wUr8WOaV~eGfX1iAHTJXgELxONrOU1cDszf7yZO0KD1cssEK8584rAOMlEeXn~MA4ZHe-au7ZpUWXf6ubAEcFQ7u6jWhtfUipfcG6om6MjxEwiWsaCISJaLHdPsOYjycFq-9AyTQaTHMfGj4qsIacJfgRCZEVkxXuPNFrr10VthU79uHYlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

    ]);
    const [current, setCurrent] = useState(0);
    
    
    useEffect(() => {
        let interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [current]);
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchproduct = async () => {
      const resp = await fetch(`http://ravi1111.pythonanywhere.com/products/${id}`, {
        method: "GET",
      });
      console.log("resp");
      const data = await resp.json();
      setProduct(data[0].fields);
      console.log(data[0].fields, loading,product);
      setImages([
        data[0].fields.mainImage,
        data[0].fields.image1,
        data[0].fields.image2,
        data[0].fields.image3,
    ])
      setLoading(false);
    };
  
    useEffect(() => {
      setLoading(true);
      fetchproduct();
      console.log(product);
    }, []);
  
    if (loading) return <div>Loading...</div>;
    return (
        <Container className='p-3'>
            <Row>
                <Col>
                    <Row xs={2}>
                        <Col sm={1} xs={2}>
                            <div className="slider flex flex-col gap-8 mt-10 relative">
                                <div
                                    className="absolute top-0 mb-6 left-6 cursor-pointer hover:bg-gray-500"
                                    onClick={nextSlide}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                        <path d="M15 8.5L8 1.5L1 8.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                {images.map((e, i) => (
                                    <div className="mt-5" key={i}>
                                        <img className="small-image w-100" src={'http://ravi1111.pythonanywhere.com/media/' + e} alt="small" />
                                    </div>
                                ))}
                                <div
                                    className="absolute bottom-0 left-6 cursor-pointer hover:bg-gray-500"
                                    onClick={prevSlide}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 8.5L12 15.5L5 8.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Col>
                        <Col sm={5} xs={10}>
                            <div className="flex gap-6 my-5">

                                <div className="image" style={{height:'400px'}}>
                                    <img className="big-image img-fluid h-100"  src={'http://ravi1111.pythonanywhere.com/media/' + images[current]} alt="sofa" />
                                </div>
                            </div>
                        </Col>
                        <Col className='text-start' sm={5} xs={12} >
                            <div className="p-title">{product.name}
                            </div>
                                <span className='stock border bg-success text-white'> In Stock </span>
                            <div className="flex gap-8 my-8">
                                <span className="flex gap-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.81008 13.9111L13.3566 16.1577C13.81 16.4446 14.3725 16.0177 14.2381 15.4883L13.2138 11.458C13.1848 11.3458 13.1882 11.2276 13.2234 11.1172C13.2586 11.0067 13.3243 10.9084 13.4129 10.8337L16.5933 8.18709C17.0106 7.83947 16.7958 7.1459 16.2586 7.11103L12.1056 6.84103C11.9938 6.8331 11.8866 6.79357 11.7964 6.72705C11.7061 6.66053 11.6367 6.56975 11.596 6.46528L10.0469 2.5649C10.0047 2.45406 9.92984 2.35865 9.83219 2.29133C9.73455 2.22401 9.61875 2.18797 9.50015 2.18797C9.38155 2.18797 9.26575 2.22401 9.1681 2.29133C9.07046 2.35865 8.99558 2.45406 8.9534 2.5649L7.40427 6.46528C7.36372 6.56985 7.29429 6.66075 7.20406 6.72738C7.11383 6.794 7.00652 6.83361 6.89465 6.84159L2.74171 7.11159C2.20508 7.1459 1.98908 7.83947 2.40702 8.18709L5.5874 10.8342C5.67588 10.909 5.7415 11.0071 5.77673 11.1175C5.81195 11.2278 5.81534 11.3458 5.78652 11.458L4.83702 15.1958C4.67558 15.8309 5.35115 16.3433 5.89452 15.9985L9.19077 13.9111C9.28342 13.8522 9.39093 13.8209 9.50071 13.8209C9.61049 13.8209 9.718 13.8522 9.81065 13.9111H9.81008Z" fill="#FF8A00" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.81008 13.9111L13.3566 16.1577C13.81 16.4446 14.3725 16.0177 14.2381 15.4883L13.2138 11.458C13.1848 11.3458 13.1882 11.2276 13.2234 11.1172C13.2586 11.0067 13.3243 10.9084 13.4129 10.8337L16.5933 8.18709C17.0106 7.83947 16.7958 7.1459 16.2586 7.11103L12.1056 6.84103C11.9938 6.8331 11.8866 6.79357 11.7964 6.72705C11.7061 6.66053 11.6367 6.56975 11.596 6.46528L10.0469 2.5649C10.0047 2.45406 9.92984 2.35865 9.83219 2.29133C9.73455 2.22401 9.61875 2.18797 9.50015 2.18797C9.38155 2.18797 9.26575 2.22401 9.1681 2.29133C9.07046 2.35865 8.99558 2.45406 8.9534 2.5649L7.40427 6.46528C7.36372 6.56985 7.29429 6.66075 7.20406 6.72738C7.11383 6.794 7.00652 6.83361 6.89465 6.84159L2.74171 7.11159C2.20508 7.1459 1.98908 7.83947 2.40702 8.18709L5.5874 10.8342C5.67588 10.909 5.7415 11.0071 5.77673 11.1175C5.81195 11.2278 5.81534 11.3458 5.78652 11.458L4.83702 15.1958C4.67558 15.8309 5.35115 16.3433 5.89452 15.9985L9.19077 13.9111C9.28342 13.8522 9.39093 13.8209 9.50071 13.8209C9.61049 13.8209 9.718 13.8522 9.81065 13.9111H9.81008Z" fill="#FF8A00" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.81008 13.9111L13.3566 16.1577C13.81 16.4446 14.3725 16.0177 14.2381 15.4883L13.2138 11.458C13.1848 11.3458 13.1882 11.2276 13.2234 11.1172C13.2586 11.0067 13.3243 10.9084 13.4129 10.8337L16.5933 8.18709C17.0106 7.83947 16.7958 7.1459 16.2586 7.11103L12.1056 6.84103C11.9938 6.8331 11.8866 6.79357 11.7964 6.72705C11.7061 6.66053 11.6367 6.56975 11.596 6.46528L10.0469 2.5649C10.0047 2.45406 9.92984 2.35865 9.83219 2.29133C9.73455 2.22401 9.61875 2.18797 9.50015 2.18797C9.38155 2.18797 9.26575 2.22401 9.1681 2.29133C9.07046 2.35865 8.99558 2.45406 8.9534 2.5649L7.40427 6.46528C7.36372 6.56985 7.29429 6.66075 7.20406 6.72738C7.11383 6.794 7.00652 6.83361 6.89465 6.84159L2.74171 7.11159C2.20508 7.1459 1.98908 7.83947 2.40702 8.18709L5.5874 10.8342C5.67588 10.909 5.7415 11.0071 5.77673 11.1175C5.81195 11.2278 5.81534 11.3458 5.78652 11.458L4.83702 15.1958C4.67558 15.8309 5.35115 16.3433 5.89452 15.9985L9.19077 13.9111C9.28342 13.8522 9.39093 13.8209 9.50071 13.8209C9.61049 13.8209 9.718 13.8522 9.81065 13.9111H9.81008Z" fill="#FF8A00" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.81008 13.9111L13.3566 16.1577C13.81 16.4446 14.3725 16.0177 14.2381 15.4883L13.2138 11.458C13.1848 11.3458 13.1882 11.2276 13.2234 11.1172C13.2586 11.0067 13.3243 10.9084 13.4129 10.8337L16.5933 8.18709C17.0106 7.83947 16.7958 7.1459 16.2586 7.11103L12.1056 6.84103C11.9938 6.8331 11.8866 6.79357 11.7964 6.72705C11.7061 6.66053 11.6367 6.56975 11.596 6.46528L10.0469 2.5649C10.0047 2.45406 9.92984 2.35865 9.83219 2.29133C9.73455 2.22401 9.61875 2.18797 9.50015 2.18797C9.38155 2.18797 9.26575 2.22401 9.1681 2.29133C9.07046 2.35865 8.99558 2.45406 8.9534 2.5649L7.40427 6.46528C7.36372 6.56985 7.29429 6.66075 7.20406 6.72738C7.11383 6.794 7.00652 6.83361 6.89465 6.84159L2.74171 7.11159C2.20508 7.1459 1.98908 7.83947 2.40702 8.18709L5.5874 10.8342C5.67588 10.909 5.7415 11.0071 5.77673 11.1175C5.81195 11.2278 5.81534 11.3458 5.78652 11.458L4.83702 15.1958C4.67558 15.8309 5.35115 16.3433 5.89452 15.9985L9.19077 13.9111C9.28342 13.8522 9.39093 13.8209 9.50071 13.8209C9.61049 13.8209 9.718 13.8522 9.81065 13.9111H9.81008Z" fill="#FF8A00" />
                                    </svg>
                                    <span className="font-poppins text-sm font-semibold">
                                        {' '}4 Review{'  '}
                                    </span>
                                </span>
                                <span className="font-poppins text-sm font-semibold">
                                    {'  '}SKU &nbsp;
                                    <span className="font-normal text-gray-600">2,51,594</span>
                                </span>
                            </div>
                            <div className="price my-5">
                                <span className="text-secondary display-6 mx-3 font-base font-poppins text-xl text-gray-400 line-through">
                                    <s>{`$ ${product.price}`}</s>
                                </span>
                                <span className=" display-6 text-success fw-bold text-2xl font-semibold">
                                    ${product.price - product.price * (product.discount / 100)}
                                </span>
                                <span className="text-red2 font-semibold m-4 text-sm bg-danger border text-white">
                                    {`${product?.discount}`}% Off
                                </span>
                            </div>
                            <div className="w-1/4 flex justify-between my-12">
                                <div className="brand flex items-center gap-6">
                                    <span className="font-poppins font-semibold text-sm fs-6 fw-bold">Brand:</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="14" viewBox="0 0 33 14" fill="none">
                                        <path d="M5.63333 7.00157C17.7644 -5.59604 31.7617 7.00157 31.7617 7.00157C31.7617 7.00157 17.7644 19.5992 5.63333 7.00157Z" fill="#36C63F" />
                                        <path d="M23.3938 12.196C28.454 10.6073 31.9454 7.49924 32.0916 7.36767L32.5 7.00005L32.0916 6.63242C31.9454 6.50086 28.454 3.39272 23.3938 1.80403C20.402 0.864772 17.4897 0.661521 14.7377 1.20002C11.358 1.86128 8.22564 3.64641 5.42432 6.50542L0.5 6.50542L0.5 7.49461L5.42432 7.49461C8.2257 10.3536 11.3579 12.1388 14.7377 12.8C17.4897 13.3384 20.4021 13.1353 23.3938 12.196ZM14.9097 11.8258C12.0163 11.2559 9.30595 9.80056 6.83845 7.49461L13.8259 7.49461L16.4805 10.1492L17.1798 9.44981L15.2247 7.49467L21.0294 7.49467L21.0294 6.50548L17.5575 6.50548L19.5127 4.55029L18.8133 3.85091L16.1587 6.50548L11.492 6.50548L12.9806 5.01685L12.2812 4.31747L10.0931 6.50554L6.83839 6.50554C9.30595 4.1996 12.0163 2.74415 14.9097 2.17428C17.4942 1.66528 20.2388 1.85509 23.0674 2.7384C26.9272 3.94378 29.9068 6.13298 30.9887 7.00011C29.9067 7.8673 26.9272 10.0564 23.0674 11.2618C20.2389 12.1451 17.4942 12.3349 14.9097 11.8258Z" fill="#009F06" />
                                        <path opacity="0.3" d="M22.8945 7.4933L22.8945 6.5042L21.9615 6.5042L21.9615 7.4933L22.8945 7.4933Z" fill="white" />
                                        <path opacity="0.2" d="M24.7617 7.4933L24.7617 6.5042L23.8287 6.5042L23.8287 7.4933L24.7617 7.4933Z" fill="#1A1A1A" />
                                    </svg>
                                    <span className="font-dance">farmary</span>


                                    <span className="font-poppins font-semibold text-sm ms-5 ps-5">
                                        Share Item:
                                    </span>
                                    <span className="share-icons flex gap-4 items-center text-black">
                                        {' '}<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                            <g clip-path="url(#clip0_921_18)">
                                                <path d="M18.5 3.41889C17.8306 3.71252 17.1174 3.90714 16.3737 4.00164C17.1388 3.54489 17.7226 2.82714 17.9971 1.96202C17.2839 2.38727 16.4964 2.68764 15.6571 2.85527C14.9799 2.13414 14.0146 1.68752 12.9616 1.68752C10.9186 1.68752 9.27387 3.34577 9.27387 5.37864C9.27387 5.67114 9.29862 5.95239 9.35938 6.22014C6.2915 6.07052 3.57687 4.60014 1.75325 2.36027C1.43487 2.91264 1.24813 3.54489 1.24813 4.22552C1.24813 5.50352 1.90625 6.63639 2.88725 7.29227C2.29437 7.28102 1.71275 7.10889 1.22 6.83777C1.22 6.84902 1.22 6.86364 1.22 6.87827C1.22 8.67152 2.49912 10.161 4.1765 10.5041C3.87612 10.5863 3.54875 10.6256 3.209 10.6256C2.97275 10.6256 2.73425 10.6121 2.51038 10.5626C2.9885 12.024 4.34525 13.0984 5.9585 13.1333C4.703 14.1154 3.10888 14.7071 1.38313 14.7071C1.0805 14.7071 0.79025 14.6936 0.5 14.6565C2.13462 15.7106 4.07188 16.3125 6.161 16.3125C12.9515 16.3125 16.664 10.6875 16.664 5.81177C16.664 5.64864 16.6584 5.49114 16.6505 5.33477C17.3829 4.81502 17.9982 4.16589 18.5 3.41889Z" fill="#4D4D4D" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_921_18">
                                                    <rect width="18" height="18" fill="white" transform="translate(0.5 1.52588e-05)" />
                                                </clipPath>
                                            </defs>
                                        </svg>{' '}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                            <g clip-path="url(#clip0_921_14)">
                                                <path d="M9.74446 1.52588e-05C4.81112 1.52588e-05 2.1875 3.16141 2.1875 6.60856C2.1875 8.20726 3.08079 10.2008 4.51073 10.8331C4.72786 10.931 4.84599 10.8894 4.89437 10.688C4.93712 10.535 5.12501 9.79808 5.21614 9.45044C5.24426 9.33906 5.22964 9.2423 5.13963 9.13768C4.66486 8.58865 4.28797 7.58848 4.28797 6.65019C4.28797 4.24596 6.19943 1.91148 9.45195 1.91148C12.2646 1.91148 14.2323 3.73856 14.2323 6.35205C14.2323 9.30531 12.6696 11.3484 10.6389 11.3484C9.51495 11.3484 8.67792 10.4664 8.94343 9.37506C9.26407 8.07563 9.89297 6.67832 9.89297 5.74115C9.89297 4.90074 9.4182 4.20545 8.44841 4.20545C7.30423 4.20545 6.37606 5.33838 6.37606 6.85945C6.37606 7.82587 6.71808 8.4784 6.71808 8.4784C6.71808 8.4784 5.58628 13.0506 5.37589 13.9045C5.02038 15.3502 5.42427 17.6914 5.45915 17.8928C5.48052 18.0042 5.6054 18.0391 5.67516 17.9479C5.78654 17.8017 7.1546 15.8497 7.53824 14.4389C7.67775 13.9248 8.2504 11.84 8.2504 11.84C8.62729 12.5207 9.71521 13.0911 10.874 13.0911C14.3212 13.0911 16.812 10.0613 16.812 6.30142C16.7997 2.69676 13.7148 1.52588e-05 9.74446 1.52588e-05Z" fill="#4D4D4D" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_921_14">
                                                    <rect width="18" height="18" fill="white" transform="translate(0.5 1.52588e-05)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        {' '}<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                            <g clip-path="url(#clip0_921_49)">
                                                <path d="M18.482 5.29206C18.4398 4.33565 18.2852 3.67813 18.0636 3.10838C17.835 2.5036 17.4834 1.96214 17.0227 1.51203C16.5726 1.05491 16.0276 0.699706 15.4298 0.474717C14.8568 0.253162 14.2027 0.0984994 13.2463 0.0563312C12.2827 0.0105917 11.9768 1.52588e-05 9.53299 1.52588e-05C7.08916 1.52588e-05 6.78327 0.0105917 5.82329 0.0527599C4.86688 0.0949282 4.20936 0.249728 3.63975 0.471146C3.03483 0.699706 2.49338 1.05134 2.04326 1.51203C1.58614 1.96214 1.23108 2.50717 1.00595 3.10495C0.784397 3.67813 0.629734 4.33208 0.587566 5.28849C0.541826 6.25204 0.53125 6.55794 0.53125 9.00177C0.53125 11.4456 0.541826 11.7515 0.583995 12.7115C0.626163 13.6679 0.780963 14.3254 1.00252 14.8952C1.23108 15.4999 1.58614 16.0414 2.04326 16.4915C2.49338 16.9486 3.0384 17.3038 3.63618 17.5288C4.20936 17.7504 4.86331 17.905 5.81986 17.9472C6.7797 17.9895 7.08573 18 9.52956 18C11.9734 18 12.2793 17.9895 13.2393 17.9472C14.1957 17.905 14.8532 17.7504 15.4228 17.5288C16.6325 17.0611 17.5889 16.1047 18.0566 14.8952C18.278 14.322 18.4328 13.6679 18.475 12.7115C18.5172 11.7515 18.5277 11.4456 18.5277 9.00177C18.5277 6.55794 18.5242 6.25204 18.482 5.29206ZM16.8611 12.6412C16.8223 13.5202 16.6747 13.9949 16.5516 14.3114C16.2491 15.0956 15.6268 15.7179 14.8426 16.0204C14.5261 16.1435 14.048 16.2911 13.1724 16.3297C12.223 16.372 11.9382 16.3825 9.53657 16.3825C7.1349 16.3825 6.84659 16.372 5.90062 16.3297C5.02155 16.2911 4.54684 16.1435 4.23038 16.0204C3.84015 15.8762 3.48495 15.6476 3.19664 15.3487C2.89775 15.0568 2.66919 14.7052 2.52497 14.315C2.4019 13.9985 2.25424 13.5202 2.21564 12.6447C2.17334 11.6953 2.1629 11.4104 2.1629 9.00878C2.1629 6.60711 2.17334 6.3188 2.21564 5.37297C2.25424 4.49389 2.4019 4.01919 2.52497 3.70272C2.66919 3.31235 2.89775 2.95729 3.20021 2.66884C3.49195 2.36995 3.84358 2.14139 4.23395 1.99731C4.55042 1.87424 5.02869 1.72658 5.90419 1.68784C6.8536 1.64568 7.13847 1.6351 9.54 1.6351C11.9452 1.6351 12.23 1.64568 13.1759 1.68784C14.055 1.72658 14.5297 1.87424 14.8462 1.99731C15.2364 2.14139 15.5916 2.36995 15.8799 2.66884C16.1788 2.96072 16.4074 3.31235 16.5516 3.70272C16.6747 4.01919 16.8223 4.49732 16.8611 5.37297C16.9032 6.32237 16.9138 6.60711 16.9138 9.00878C16.9138 11.4104 16.9032 11.6918 16.8611 12.6412Z" fill="#4D4D4D" />
                                                <path d="M9.53313 4.37781C6.98037 4.37781 4.90918 6.44886 4.90918 9.00176C4.90918 11.5547 6.98037 13.6257 9.53313 13.6257C12.086 13.6257 14.1571 11.5547 14.1571 9.00176C14.1571 6.44886 12.086 4.37781 9.53313 4.37781ZM9.53313 12.0012C7.87703 12.0012 6.53369 10.658 6.53369 9.00176C6.53369 7.34552 7.87703 6.00232 9.53313 6.00232C11.1894 6.00232 12.5326 7.34552 12.5326 9.00176C12.5326 10.658 11.1894 12.0012 9.53313 12.0012Z" fill="#4D4D4D" />
                                                <path d="M15.4199 4.19499C15.4199 4.79112 14.9365 5.27448 14.3402 5.27448C13.7441 5.27448 13.2607 4.79112 13.2607 4.19499C13.2607 3.59873 13.7441 3.11551 14.3402 3.11551C14.9365 3.11551 15.4199 3.59873 15.4199 4.19499Z" fill="#4D4D4D" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_921_49">
                                                    <rect width="18" height="18" fill="white" transform="translate(0.5 1.52588e-05)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-gray-500 font-poppins text-lg w-full py-3 pe-5 text-secondary">
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                    per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
                                    ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                                </p>
                            </div>
                            <div className="flex items-center gap-12">

                                <Link className="btn btn-success w-75 rounded-pill px-5 mx-3 flex justify-center py-4 px-24 rounded-xl4 items-center border-2 border-lightGreen bg-lightGreen text-white font-semibold font-poppins text-md" to='/contact'>
                                    
                                    {" "}
                                    Purchase this product <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                        <path d="M5.16667 7.33333H2.66667L1 16.5H16L14.3333 7.33333H11.8333M5.16667 7.33333V4.83333C5.16667 2.99239 6.65905 1.5 8.5 1.5V1.5C10.3409 1.5 11.8333 2.99238 11.8333 4.83333V7.33333M5.16667 7.33333H11.8333M5.16667 7.33333V9.83333M11.8333 7.33333V9.83333" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>{" "}
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.4996 17.5451C-6.16672 8.33333 5.49993 -1.66667 10.4996 4.65671C15.4999 -1.66667 27.1666 8.33333 10.4996 17.5451Z" stroke="#2C742F" stroke-width="1.5" />
                                </svg>

                            </div>
                            <p className="font-poppins mt-3">
                                <span className="text-md font-semibold fw-bold">Category: </span>
                                <span className="text-gray-500 font-normal text-md">
                                    {" "}
                                    {product.category}{" "}
                                </span>
                            </p>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container >
    )
}

export default VCarousel
