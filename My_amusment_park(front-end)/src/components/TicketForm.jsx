import React from "react";

function TicketForm() {
  return (
    <div>
    <form className="">
    <label htmlFor="type">Type of ticket</label>
    <select name="type" >
      <option value="VIP"></option>
      <option value="Normal"></option>
    </select>
    </form>
    </div>
  ) 
}

export default TicketForm;
