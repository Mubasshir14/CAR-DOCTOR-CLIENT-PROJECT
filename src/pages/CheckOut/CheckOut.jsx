
import { useLoaderData } from 'react-router-dom';
import img1 from '../../assets/images/checkout/checkout.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'; 

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id , img} = service;
    const { user } = useContext(AuthContext);
    const handleBookService = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        console.log(name, date);

        const booking = {
            CustomerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        };
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Sweet!",
                    text: "Service Booked Successfully!",
                    imageUrl: "https://unsplash.it/400/200",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            }
        })
    }
    return (
        <div>
            <div className="mt-20 mb-36">
                <div className="carousel-item relative w-full rounded-xl">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-8 ml-12'>
                            <h2 className='text-7xl font-bold'>Check Out</h2>
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 left-1/3 -bottom-6">
                        <div className="bg-[#FF3811] py-3 px-20 rounded-t-3xl">
                            <h3 className="text-white">Home/Checkout</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="rounded-xl bg-base-200 mb-36">
                    <h1 className='lg:text-5xl text-[#FF3811] lg:border-b-4 font-semibold text-xl lg:font-extrabold text-center p-5'>{title}</h1>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="p-10">
                            <form onSubmit={handleBookService}>
                                <div className="block lg:flex gap-4 space-y-2 lg:space-y-0">
                                    <div>
                                        <input type="text" placeholder="First Name" name="name" className="input input-bordered w-[472px]" required />
                                    </div>
                                    <div>
                                        <input type="date" defaultValue={user?.displayName} name="date" className="input input-bordered w-[472px]" required />
                                    </div>
                                </div>
                                <div className="block lg:flex gap-4 mt-3 mb-8 space-y-2 lg:space-y-0">
                                    <div>
                                        <input type="email" placeholder="Email" defaultValue={user?.email} name="email" className="input input-bordered w-[472px]" required />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Due Amount" defaultValue={'$' + price} name="amount" className="input input-bordered w-[472px]" required />
                                    </div>
                                </div>
                                <div>
                                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full h-[150px]"></textarea>
                                </div>
                                <input className="bg-[#FF3811] mt-6 text-white w-full btn" type="submit" value='Order Confirm' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;