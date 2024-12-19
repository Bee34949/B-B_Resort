import React, { useState, useEffect } from 'react';
import { fetchRooms } from '../services/api';

const RoomList = () => {
    const [rooms, setRooms] = useState([]); // เก็บข้อมูลห้องพักใน state

    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await fetchRooms(); // เรียก API
                setRooms(response.data.data); // ตั้งค่า state ด้วยข้อมูลที่ดึงมา
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        getRooms(); // เรียกฟังก์ชันเมื่อ component ถูกโหลด
    }, []);

    return (
        <div>
            <h2>Room List</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room._id}>
                        {room.name} - {room.type} - {room.price} THB -{' '}
                        {room.availability ? 'Available' : 'Unavailable'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
