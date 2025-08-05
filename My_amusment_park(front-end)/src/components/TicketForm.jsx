import React from "react";
import {useState} from 'react'
const TicketForm =()=> {

  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  today = today.toISOString().split('T')[0];
  tomorrow = tomorrow.toISOString().split('T')[0];

  const initialState = { type:"normal", date:today , amount:1  };
  const [formValues, setFormValues] = useState(initialState);
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormValues(initialState);
    console.log('worked')
  };

  return (
    <div>
    <form className="ticket-form" onSubmit={handleSubmit}>
    <label htmlFor="type">Type of ticket</label>
    <select name="type" onChange={handleChange}>
      <option value="Normal">Normal</option>
      <option value="VIP">VIP</option>
    </select>
    <label htmlFor="date" min={tomorrow} >Select a date</label>
    <input type="date" name="date" id="date" onChange={handleChange}/>
    <label htmlFor="amount">How many tickets?</label>
    <input type="number" name="amount" min={1} max={99}  onChange={handleChange}/>
    <button type="submit">Proceed for payment</button>
    </form>
    </div>
  ) 
}

export default TicketForm;
