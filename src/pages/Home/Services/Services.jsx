import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-32">
            <div className="px-64 space-y-5 mb-12">
                <h5 className="text-center text-error font-bold text-xl">Service</h5>
                <h1 className="text-balck font-bold text-4xl text-center">Our Service Area</h1>
                <p className="text-slate-700 text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;