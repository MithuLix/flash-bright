import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then((res) => res.json())
            .then(data => { setServices(data); setSpinner(false) })
    }, [])

    return (
        <div className="container">
            <p className="text-left py-6 text-4xl font-bold text-gray-700">Our services</p>
            <section className="g-4 mt-3">
                {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>}
            </section>
            <div className=" grid grid-cols-1 md:grid-cols-2 grid-flow-row auto-rows-max md:auto-rows-min gap-10 mb-20">
                {services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)}
            </div>
        </div >
    );
};

export default Services;