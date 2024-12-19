import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // ที่อยู่ Backend

const FloatingChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => socket.disconnect();
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit("send_message", { text: message });
            setMessages((prevMessages) => [...prevMessages, { text: message }]);
            setMessage("");
        }
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
            <div
                style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                💬
            </div>
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "60px",
                        right: "0",
                        width: "300px",
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                    }}
                >
                    <div style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "10px" }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ marginBottom: "5px" }}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        style={{
                            width: "calc(100% - 60px)",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            marginRight: "5px",
                        }}
                    />
                    <button
                        onClick={sendMessage}
                        style={{
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default FloatingChat;
