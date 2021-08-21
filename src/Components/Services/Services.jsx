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
        <div className="container pt-16">
            <section className="g-4 mt-3">
                {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>}
            </section>
            <div className="container h-64 grid grid-rows-3 grid-flow-col gap-4">
                {services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)}
            </div>
        </div >
    );
};

export default Services;