import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://flash-bright-backend-production.up.railway.app/getServices')
            .then((res) => res.json())
            .then(data => { setServices(data); setSpinner(false) })
    }, [])

    return (
        <div className="md:container">
            <p className="text-center py-6 pb-12 text-5xl font-bold text-white">Our Best Services</p>
            <div class=" flex justify-center items-center">
                {spinner && <div class="animate-spin rounded-full h-32 w-32 border-b-4 border-white"></div>}
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 grid-flow-row auto-rows-max md:auto-rows-min gap-10 mb-20">
                {services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)}
            </div>
        </div >
    );
};

export default Services;