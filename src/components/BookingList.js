import React, { useState, useEffect } from 'react';
import { fetchBookings } from '../services/api';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getBookings = async () => {
            try {
                const response = await fetchBookings();
                console.log('Bookings Data:', response.data.data); // เพิ่ม Debug ตรงนี้
                setBookings(response.data.data); // หรือ response.data
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        getBookings();
    }, []);

    return (
        <div>
            <h2>Booking List</h2>
            <ul>
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <li key={booking._id}>
                            Room: {booking.roomId} - User: {booking.userName} - Check-In: {new Date(booking.checkInDate).toLocaleDateString()} - Check-Out: {new Date(booking.checkOutDate).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <li>No bookings found</li>
                )}
            </ul>
        </div>
    );
};

export default BookingList;
