import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/api/bookings", formData);
            alert("Booking Successful!");
            console.log(response.data);
        } catch (error) {
            console.error("Error booking room:", error);
            alert("Booking failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Check In:</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />

            <label>Check Out:</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />

            <label>Guests:</label>
            <input type="number" name="guests" value={formData.guests} min="1" onChange={handleChange} required />

            <button type="submit">Book Now</button>
        </form>
    );
}

export default BookingForm;
