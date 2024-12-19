import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // URL ของ Backend

// ดึงข้อมูลห้องพัก
export const fetchRooms = () => axios.get(`${API_URL}/rooms`);

// ดึงข้อมูลการจอง
export const fetchBookings = () => axios.get(`${API_URL}/bookings`);

// สร้างการจองใหม่
export const createBooking = (data) => axios.post(`${API_URL}/bookings`, data);

