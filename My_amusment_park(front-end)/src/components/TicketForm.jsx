import React, { useState } from "react";
import { createTicket } from "../services/Ticket";
const TicketForm = ({ user, handleSubmit }) => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = tomorrow.toISOString().split("T")[0];

  if (!user) {
    return <p>Loading profile ...</p>;
  }

  const initialState = {
    type: "Normal",
    date: tomorrow,
    amount: 1,
    ownerId: user.id,
  };
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="ticket-form-container">
      <form
        className="ticket-form"
        onSubmit={(e) => handleSubmit(e, formValues)}
      >
        <h2 className="form-title">Buy Your Ticket</h2>

        <label>Type of Ticket</label>
        <select name="type" value={formValues.type} onChange={handleChange}>
          <option value="Normal">Normal</option>
          <option value="VIP">VIP</option>
        </select>

        <label>Select a Date</label>
        <input
          type="date"
          name="date"
          min={tomorrow}
          value={formValues.date}
          onChange={handleChange}
        />

        <label>How Many Tickets?</label>
        <input
          type="number"
          name="amount"
          min={1}
          max={99}
          value={formValues.amount}
          onChange={handleChange}
        />

        <button type="submit">Proceed for Payment</button>
      </form>
    </div>
  );
};

export default TicketForm;
