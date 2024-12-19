import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import ViewRooms from "./components/ViewRooms";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingChat from "./components/FloatingChat";
function App() {
    return (
        
        <Router>
            <div className="app">
                {/* Header Section */}
                <header className="header">
                    <div className="top-bar">
                        <span>📞 111-2223-333 | 📍 1234 Street Name, Thailand</span>
                        <div className="top-links">
                            <span>USD</span>
                            <Link to="/login">
                                <button>My Account</button>
                            </Link>
                            <Link to="/booking">
                                <button className="book-now">Book Now</button>
                            </Link>
                        </div>
                    </div>
                    <Navbar />
                </header>
                <ToastContainer />
                {/* คอมโพเนนต์อื่น ๆ */}
                {/* คอมโพเนนต์อื่นๆ */}
                <FloatingChat />
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h2>Incredible Views</h2>
                        <p>Enjoy breathtaking views over the east river and downtown from the comfort of your room.</p>
                        {/* เชื่อมโยงไปยังหน้า View Rooms */}
                        <Link to="/rooms">
                            <button className="view-rooms">View Rooms</button>
                        </Link>
                    </div>
                </section>

                {/* Search Form */}
                <section className="search-form">
                    <div className="search-field">
                        <label>Location</label>
                        <input type="text" placeholder="Select a location" />
                    </div>
                    <div className="search-field">
                        <label>Check In</label>
                        <input type="date" />
                    </div>
                    <div className="search-field">
                        <label>Check Out</label>
                        <input type="date" />
                    </div>
                    <div className="search-field">
                        <label>Guests</label>
                        <input type="number" placeholder="1 Guest(s)" />
                    </div>
                    <button className="book-now">Book Now</button>
                </section>

                {/* Routes */}
                <Routes>
                    
                    <Route path="/rooms" element={<ViewRooms />} />
                    <Route path="/booking" element={<BookingForm />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Routes>
            </div>
        </Router>
        
    );
}

export default App;
