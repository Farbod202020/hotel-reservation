import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Carousel from './Carousel';
import City from './City';
import Offers from './Offers';
import Smartphonefooter from './Smartphonefooter';
import Footer from './Footer';

export default function App() {

        const CityData = [
            [
                { image: require ('./NewYork.jpg'), text: 'U.S.A', city: 'Newyork' },
                { image: require ('./Toronto.jpg'), text: 'Canada', city: 'Toronto' },
                { image: require ('./berlin.jpg'), text: 'Germany', city: 'Berlin' },
                { image: require ('./Tokyo.jpg'), text: 'Japan', city: 'Tokyo' },
            ],
            [
                { image: require ('./Beijing.jpg'), text: 'China', city: 'Beijing' },
                { image: require ('./london.jpg'), text: 'England', city: 'London' },
                { image: require ('./paris.jpg'), text: 'France', city: 'Paris' },
                { image: require ('./Rome.jpg'), text: 'Italy', city: 'Rome' },
            ]
        ];
        const OffersData = [
            [
                { image: require ('./b-flat.jpg'), city: 'Berlin', name: 'downtown', rate: '9.4/10', night: '70$ per night' },
                { image: require ('./taksim.jpg'), city: 'Istanbul', name: 'taksım', rate: '8.8/10', night: '30$ per night' },
                { image: require ('./rich.jpg'), city: 'Toronto', name: 'Richmondhill', rate: '9.3/10', night: '70$ per night' },
                { image: require ('./nyc.jpg'), city: 'Newyork', name: 'manhattan', rate: '9.7/10', night: '110$ per night' },
            ],
            [
                { image: require ('./seatle.jpg'), city: 'Seatle', name: 'downtown', rate: '9.4/10', night: '60$ per night' },
                { image: require ('./Yale.jpg'), city: 'Vancouver', name: 'Yaletown', rate: '8.8/10', night: '40$ per night' },
                { image: require ('./t-house.jpg'), city: 'Tokyo', name: 'Asakusa', rate: '9.3/10', night: '80$ per night' },
                { image: require ('./hongkong.jpg'), city: 'HongKong', name: 'Central', rate: '9.7/10', night: '90$ per night' },
            ]
        ];
    return(

            <div>

                <Navbar />
                <Searchbar/>
                <div className='stay-t'><h2 className='stay-t-details'>Discover your new favourite stay</h2></div>
                <Carousel/>
                <div className='city-t'><h2 className='city-t-details'>Explore stays in trending destinations</h2></div>
                <City data={CityData} 
                />
                <div className='offers-t'><h2 className='city-t-details'>Last-minute weekend deals</h2></div>
                <Offers data={OffersData} 
                />
                <Smartphonefooter />
                <Footer />
            </div>
    )


}