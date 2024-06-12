import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookinngRow from "./BookinngRow";
import Swal from 'sweetalert2';
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        // fetch(url)
        //     .then(res => {
        //         if (!res.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return res.json();
        //     })
        //     .then(data => {
        //         setBookings(data);
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     });
    }, [url]);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                        Swal.fire("Error!", "There was a problem deleting your booking.", "error");
                    });
            }
        });
    }


    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updatedBookings = bookings.map(booking =>
                        booking._id === id ? { ...booking, status: 'confirm' } : booking
                    );
                    setBookings(updatedBookings);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    return (
        <div className="min-h-[calc(100vh-70px)] mt-20 mb-20">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className="font-bold text-xl text-center">
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <BookinngRow
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                                key={booking._id}
                                booking={booking}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
