import React, { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketPay from "../components/TicketPay";

const BuyTicket = ({user}) => {
  const [submittedData, setSubmittedData] = useState(null);

  if (submittedData) {
    return <TicketPay values={submittedData} />;
  }

  return (
    <TicketForm user={user} onSubmit={(data) => setSubmittedData(data) } />
  );
};

export default BuyTicket;
