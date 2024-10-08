

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, name, email, img, title, price, status } = booking;


    return (
        < tr >
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-neutral">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="h-24 w-24 rounded">
                            <img
                                src={img}
                                alt="Service Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl">{title}</div>
                        <div className="text-sm opacity-50">{_id}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <th>
                {   status === 'confirm' ? <span className="text-sm text-success font-bold">confirmed</span>
                : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">confirm</button>
                }
            </th>
        </tr >
    );
};

export default BookingRow;