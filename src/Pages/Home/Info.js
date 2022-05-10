import React from 'react';
import InfoDetails from './InfoDetails';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 px-12'>
            <InfoDetails bgClass="bg-gradient-to-r from-secondary  to-primary" cardTitle="Opening Hours" img={clock}></InfoDetails>
            <InfoDetails bgClass="bg-accent" cardTitle="Visit our location" img={marker}></InfoDetails>
            <InfoDetails bgClass="bg-gradient-to-r from-secondary  to-primary" cardTitle="Contact us now" img={phone}></InfoDetails>

        </div>
    );
};

export default Info;