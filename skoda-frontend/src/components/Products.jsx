import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Mynavbar from './Mynavbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function Products() {
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
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const resp = await fetch("http://127.0.0.1:8000/products/", {
            method: "GET",
        });
        const data = await resp.json();
        console.log(data);
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
        setLoading(true);
    }, []);

    if (loading) return <div>Loading...</div>;
    return (
        <>
          
            <Container>
                <h1>Our Products</h1>
                <Row xs={1} md={4} className="g-4 mt-3">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} product={product}/>
                    ))}
                </Row>
            </Container>
            
        </>
    )
}

export default Products
