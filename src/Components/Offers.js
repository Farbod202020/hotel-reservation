import React, { useEffect } from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Offers = ({ data }) => {
    return (
        <div className="container offers-carousel-position">
        <div className="row justify-content-center">
            <div className="col-md-8 c-detail">
            <Carousel prevIcon={<FontAwesomeIcon icon={faAngleLeft} />} nextIcon={<FontAwesomeIcon icon={faAngleRight} />} 

                        className="horizontal-carousel"
            >
            {data.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className="row">
                        {slide.map((item, itemIndex) => (
                            <div className="col-md-3 box-detail-1" key={itemIndex}>
                                <img src={item.image} className="img-fluid img-size-1" alt={`Slide ${index + 1}`} />
                                <div className="text-center">{item.city}</div>
                                <div className="text-center">{item.name}</div>
                                <div className="text-center">{item.rate}</div>
                                <div className="text-center">{item.night}</div>
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
  
  export default Offers;