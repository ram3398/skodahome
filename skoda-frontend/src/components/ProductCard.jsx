import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const [hover,setHover]=useState(false)
    const backgroundImage="http://127.0.0.1:8000/media/" +props.product.mainImage
    return (
        <Col className='my-5'>
            <Card className='border border-0'>
                <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                {hover?<div style={{height:'250px', backgroundImage:`url(${backgroundImage})`,backgroundSize:'cover' ,backgroundPosition:'center center',opacity:'0.7'}} className='p-5'>
                    <a className='btn btn-dark py-auto mt-5' href={'/products/' +props.product.id}>Know More</a>
                </div>:<Card.Img variant="top" src={'http://127.0.0.1:8000/media/' + props.product.mainImage} height={'250px'} />}
                </div>
                <Card.Body>
                    <Card.Title className='mt-2'>
                        <Link className='text-decoration-none text-dark' to={'/products/' +props.product.id}>{props.product.name} </Link></Card.Title>
                    <Card.Text className='mt-2'>
                        {props.product.description}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit condimentum adipisc
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
