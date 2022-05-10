import React from 'react';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import Service from './Service';
import ServiceExtra from './ServiceExtra';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-primary uppercase font-bold text-xl'>Our Services</h1>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 '>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <ServiceExtra></ServiceExtra>
        </div>
    );
};

export default Services;