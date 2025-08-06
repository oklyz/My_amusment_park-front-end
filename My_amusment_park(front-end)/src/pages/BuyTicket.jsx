import React, { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketPay from "../components/TicketPay";
import TicketsShow from "../components/TicketsShow";
const BuyTicket = ({ user }) => {
  const [submittedData, setSubmittedData] = useState(null);
  const [showTickets, setShowTickets] = useState(false);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    setSubmittedData(data);
  };
  const showTicketPage = () => {
    setShowTickets(true);
  };
  if (showTickets) return <TicketsShow values={submittedData} />;
  else if (submittedData)
    return <TicketPay values={submittedData} showTicketPage={showTicketPage} />;
  else return <TicketForm user={user} handleSubmit={handleSubmit} />;
};

export default BuyTicket;
