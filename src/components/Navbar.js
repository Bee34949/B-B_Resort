import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        // ลบ JWT Token
        localStorage.removeItem("token");

        // แสดงข้อความแจ้งเตือน
        toast.success("You have been logged out successfully!");

        // Redirect ไปหน้า Login หลังจาก 2 วินาที
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    };

    return (
        <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <h1 style={{ margin: 0 }}>B&B Resort</h1>
                <ul style={{ display: "flex", listStyleType: "none", padding: 0, margin: "0.5rem 0" }}>
                    <li style={{ marginRight: "1rem" }}><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
                    <li style={{ marginRight: "1rem" }}><a href="/accommodation" style={{ color: "white", textDecoration: "none" }}>Accommodation</a></li>
                    <li style={{ marginRight: "1rem" }}><a href="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</a></li>
                    <li style={{ marginRight: "1rem" }}><a href="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a></li>
                    <li style={{ marginRight: "1rem" }}><a href="/about" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
                    <li style={{ marginRight: "1rem" }}><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</a></li>
                </ul>
            </div>
            <div>
                {token ? (
                    <button
                        onClick={handleLogout}
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <a
                        href="/login"
                        style={{
                            backgroundColor: "#007BFF",
                            color: "white",
                            textDecoration: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "5px",
                        }}
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
