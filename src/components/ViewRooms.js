// src/components/ViewRooms.js
import React from "react";

const ViewRooms = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>View Our Rooms</h1>
      <p>Explore the comfort and luxury of our rooms.</p>
      <div className="room-list" style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem", maxWidth: "300px" }}>
          <img
            src="https://files.oaiusercontent.com/file-MdE8hNJwkVuYDKgGa9Airf?se=2024-12-19T08%3A40%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2015adff-9af9-4f59-a87a-038e5e0854df.webp&sig=g%2BkxGFUdrJjRH1ZScE9AGHgIgI4cwp7z67rqY8cOllI%3D"
            alt="Deluxe Room"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h2>Deluxe Room</h2>
          <p>Spacious and modern amenities.</p>
        </div>
        <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem", maxWidth: "300px" }}>
          <img
            src="https://files.oaiusercontent.com/file-MRokXkA1B6wikFBpD9QWHa?se=2024-12-19T08%3A46%3A56Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D319f4d1a-bc25-4c4b-a3b9-7b44cbacdd36.webp&sig=A3fBz2xpqACbpaPKB3CN%2BuLd55MDyZOFBoTvXRBrEfY%3D"
            alt="Suite Room"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h2>Suite Room</h2>
          <p>Luxurious rooms with amazing views.</p>
        </div>
      </div>
    </div>
  );
};

export default ViewRooms;

