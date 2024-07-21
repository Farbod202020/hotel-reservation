import React from 'react';
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar';
import Carousel from '../Components/Carousel';
import City from '../Components/City';
import Offers from '../Components/Offers';
import Smartphonefooter from '../Components/Smartphonefooter';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

// Define CityData and OffersData outside the HomePage component
const CityData = [
  [
    { image: require('../assets/NewYork.jpg'), text: 'U.S.A', city: 'Newyork' },
    { image: require('../assets/Toronto.jpg'), text: 'Canada', city: 'Toronto' },
    { image: require('../assets/berlin.jpg'), text: 'Germany', city: 'Berlin' },
    { image: require('../assets/Tokyo.jpg'), text: 'Japan', city: 'Tokyo' },
  ],
  [
    { image: require('../assets/Beijing.jpg'), text: 'China', city: 'Beijing' },
    { image: require('../assets/london.jpg'), text: 'England', city: 'London' },
    { image: require('../assets/paris.jpg'), text: 'France', city: 'Paris' },
    { image: require('../assets/Rome.jpg'), text: 'Italy', city: 'Rome' },
  ]
];

const OffersData = [
  [
    { image: require('../assets/b-flat.jpg'), city: 'Berlin', name: 'downtown', rate: '9.4/10', night: '70$ per night' },
    { image: require('../assets/taksim.jpg'), city: 'Istanbul', name: 'taksım', rate: '8.8/10', night: '30$ per night' },
    { image: require('../assets/rich.jpg'), city: 'Toronto', name: 'Richmondhill', rate: '9.3/10', night: '70$ per night' },
    { image: require('../assets/nyc.jpg'), city: 'Newyork', name: 'manhattan', rate: '9.7/10', night: '110$ per night' },
  ],
  [
    { image: require('../assets/seatle.jpg'), city: 'Seatle', name: 'downtown', rate: '9.4/10', night: '60$ per night' },
    { image: require('../assets/Yale.jpg'), city: 'Vancouver', name: 'Yaletown', rate: '8.8/10', night: '40$ per night' },
    { image: require('../assets/t-house.jpg'), city: 'Tokyo', name: 'Asakusa', rate: '9.3/10', night: '80$ per night' },
    { image: require('../assets/hongkong.jpg'), city: 'HongKong', name: 'Central', rate: '9.7/10', night: '90$ per night' },
  ]
];

function HomePage() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className='stay-t'>
        <h2 className='stay-t-details'>Discover your new favourite stay</h2>
      </div>
      <Carousel />
      <div className='city-t'>
        <h2 className='city-t-details'>Explore stays in trending destinations</h2>
      </div>
      <City data={CityData} />
      <div className='offers-t'>
        <h2 className='city-t-details'>Last-minute weekend deals</h2>
      </div>
      <Offers data={OffersData} />
      <Smartphonefooter />
      <Footer />
    </div>
  );
}

export default HomePage;