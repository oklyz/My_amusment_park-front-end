import React, { useState } from "react";

const TicketForm = ({ onSubmit }) => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = tomorrow.toISOString().split("T")[0];

  const initialState = { type: "normal", date: tomorrow, amount: 1 };
  const [formValues, setFormValues] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues); 
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Type of ticket</label>
      <select name="type" value={formValues.type} onChange={handleChange}>
        <option value="normal">Normal</option>
        <option value="VIP">VIP</option>
      </select>

      <label>Select a date</label>
      <input
        type="date"
        name="date"
        min={tomorrow}
        value={formValues.date}
        onChange={handleChange}
      />

      <label>How many tickets?</label>
      <input
        type="number"
        name="amount"
        min={1}
        max={99}
        value={formValues.amount}
        onChange={handleChange}
      />

      <button type="submit">Proceed for payment</button>
    </form>
  );
};

export default TicketForm;
