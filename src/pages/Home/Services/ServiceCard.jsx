import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {img, title, price, _id} = service;
    return (
        <div className="card  shadow-lg border-2 border-gray-300">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold justify-start">{title}</h2>
                <h2 className="card-title text-[#FF3811] font-bold">Price : ${price}</h2>
                <div className="card-actions justify-end">
                    <Link 
                    to={`/checkout/${_id}`}
                     className="flex items-center gap-2 btn border-[#FF3811] text-[#FF3811]">Book Now<FaArrowRight className="text-[#FF3811]"></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;