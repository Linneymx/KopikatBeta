import React from "react";
import ImgLeft from "../Assets/sweet_coffee.png";
import "../Styles/Reservation.css";

function Reservation() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImgLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>    Reservation</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />

          <label htmlFor="Date">Date</label>
          <input name="Date" placeholder="Choose Date..." type="date" />
          
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="¿Some special message? write it"
            name="message"
            required
          ></textarea>
          <button > Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;