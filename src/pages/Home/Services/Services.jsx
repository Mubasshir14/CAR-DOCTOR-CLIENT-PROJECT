

import { SlCalender } from "react-icons/sl";
import { MdAddCall } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center  space-y-4 mb-8">
                <h3 className='text-[#FF3811] text-2xl font-bold '>Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-[#737373] py-3">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </div>




            {/* Black Banner */}
            <div>
                <div className="flex w-full bg-black mb-36 h-[250px] items-center p-5 rounded-xl mt-36">
                    <div className="grid h-20 flex-grow card  rounded-box place-items-center">
                        <div className="flex items-center justify-center gap-6">
                            <div>
                                <SlCalender className="text-[#FF3811] text-2xl"></SlCalender>
                            </div>
                            <div className="text-white">
                                <p className="text-xl">We are open monday-friday</p>
                                <h2 className="font-extrabold text-3xl">7:00 am - 9:00 pm</h2>
                            </div>
                        </div>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    <div className="grid h-20 flex-grow card rounded-box place-items-center">
                        <div className="flex items-center justify-center gap-6">
                            <div>
                                <MdAddCall className="text-[#FF3811] text-2xl"></MdAddCall>
                            </div>
                            <div className="text-white">
                                <p className="text-xl">Have a question?</p>
                                <h2 className="font-extrabold text-3xl">+2546 251 2658</h2>
                            </div>
                        </div>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    <div className="grid h-20 flex-grow card rounded-box place-items-center">
                        <div className="flex items-center justify-center gap-6">
                            <div>
                                <FaMapLocationDot className="text-[#FF3811] text-2xl"></FaMapLocationDot>
                            </div>
                            <div className="text-white">
                                <p className="text-xl">Need a repair? our address</p>
                                <h2 className="font-extrabold text-3xl">Liza Street, New York</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;