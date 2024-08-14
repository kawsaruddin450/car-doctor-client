import React from 'react';

const BookingRow = ({ booking }) => {
    const { _id, name, email, img, title, price } = booking;
    return (
        < tr >
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr >
    );
};

export default BookingRow;