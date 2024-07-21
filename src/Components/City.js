import React, { useEffect } from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const City = ({ data }) => {
    return (
        <div className="container c-carousel-location">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <Carousel prevIcon={<FontAwesomeIcon icon={faAngleLeft} />} nextIcon={<FontAwesomeIcon icon={faAngleRight} />} 

                        className="horizontal-carousel"
            >
            {data.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className="row">
                        {slide.map((item, itemIndex) => (
                            <div className="col-md-3 box-detail" key={itemIndex}>
                                <img src={item.image} className="img-fluid img-size" alt={`Slide ${index + 1}`} />
                                <div className="text-center">{item.text}</div>
                                <div className="text-center">{item.city}</div>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
        </div>
        </div>
    );
};
  
  export default City;

