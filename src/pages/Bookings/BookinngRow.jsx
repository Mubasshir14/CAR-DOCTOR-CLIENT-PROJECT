const BookinngRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, CustomerName, img, date, service, price, status } = booking;

    return (
        <tr>
            <th>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm btn-circle bg-[#FF3811] p-1 text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24 flex justify-center">
                        <img src={img} alt="Service Image" />
                    </div>
                </div>
            </td>
            <td className="font-bold text-gray-900 text-xl text-center">{CustomerName}</td>
            <td className="font-bold text-gray-900 text-xl text-center">{service}</td>
            <td className="font-bold text-gray-900 text-xl text-center">{date}</td>
            <td className="font-bold text-gray-900 text-xl text-center">${price}</td>
            <td className="text-center">
                {
                    status === 'confirm' ? 
                    <button className="btn btn-outline font-bold border-[#29B170] text-[#29B170]">Confirmed</button> 
                    :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white">Pending</button>
                }
                {/* <button className="btn bg-[#FF3811] text-white">Pending</button> */}
            </td>
        </tr>
    );
};

export default BookinngRow;
