import React from 'react';
import Pick from './Pick';
import Location from './Location';
import Amount from './Amount';
import './App.css';
export default function Searchbar() {

    return(

            <div className='searchbar-styles'>

                
                
                <Location/>
                <Amount/>
                <Pick />

            </div>


    )


}