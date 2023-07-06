import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    '/public/image/bg4.jpg',
    '/public/image/bg5.jpg',
    '/public/image/bg6.jpg'
];

export default function ImageCarousel() {
    return (
        <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} showArrows={false} showStatus={false}>
            {images.map((image, index) => (
                <div className='h-screen' key={index}>
                    <img className='h-screen' src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
}