import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingContainer = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    console.log("Start Date:", date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    console.log("End Date:", date);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e46bee, #61ff6b)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        margin: "0 20px", // Added margin from left and right sides
        color: "#ffffff",
      }}
    >
      <h4 style={{ marginBottom: "20px", color:"black", fontWeight:"bold" }}>BOOKING</h4>
      <div
        style={{
          // display: "flex",
          justifyContent: "center", // Center the calendars horizontally
          marginBottom: "20px",
          borderRadius:"10px"
        }}
      >
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Check-In"
          dateFormat="dd/MM/yyyy"
          className="date-picker"
          style={{ marginRight: "10px"}}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="Check-Out"
          dateFormat="dd/MM/yyyy"
          className="date-picker"
          style={{ marginLeft: "10px"}}
        />
      </div>
      <button
        style={{
          marginTop: "20px",
          padding: "0.7rem 2rem",
          background: "linear-gradient(135deg, #FFD700, #FF6347)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight:"bold",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
       GET BOOKED
      </button>
    </div>
  );
};

export default BookingContainer;


