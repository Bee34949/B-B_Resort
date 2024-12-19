import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // ลบ JWT Token
        localStorage.removeItem("token"); // หรือ sessionStorage.removeItem("token");
        // Redirect ไปที่หน้า Login
        navigate("/login");
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 20px", background: "red", color: "white", border: "none", borderRadius: "5px" }}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
