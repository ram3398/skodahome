import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../assets/images/image1.jpeg'

function MyCarousel() {
  return (
    <div>
      <Carousel data-bs-theme="dark" style={{minWidth:'105%',zIndex:'-1'}}>
      <Carousel.Item>
      <img style={{ maxWidth: '70vw', minWidth: '105%' }} src={image1} />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ maxWidth: '70vw', minWidth: '105%' }} src={image1} />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ maxWidth: '70vw', minWidth: '105%' }} src={image1} />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarousel
