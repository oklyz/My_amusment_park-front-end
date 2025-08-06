import React, { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketPay from "../components/TicketPay";

const BuyTicket = ({ user }) => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    setSubmittedData(data);
  };
  if (submittedData) return <TicketPay values={submittedData} />;
  else return <TicketForm user={user} handleSubmit={handleSubmit} />;
};

export default BuyTicket;
