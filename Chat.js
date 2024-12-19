import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // ที่อยู่ของ Backend

const Chat = () => {
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
        <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto" }}>
            <h2>Chat</h2>
            <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", height: "200px", overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <div key={index}>{msg.text}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
            />
            <button onClick={sendMessage} style={{ width: "100%", padding: "0.5rem", backgroundColor: "#007BFF", color: "white", border: "none" }}>
                Send
            </button>
        </div>
    );
};

export default Chat;
