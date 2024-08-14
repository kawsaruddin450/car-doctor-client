import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, title, price, img } = service;
    return (
        <div className="bg-base-100 w-full shadow-xl p-6 border-1 border-black">
            <figure className="mb-5">
                <img
                    src={img}
                    alt={title}
                    className="rounded" />
            </figure>
            <div className="space-y-5">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className='text-error text-xl font-semibold'>Price: <span>${price}</span></p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-circle text-error"><FaArrowRight></FaArrowRight> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;