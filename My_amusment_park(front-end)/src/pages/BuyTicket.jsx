import React, { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketPay from "../components/TicketPay";

const BuyTicket = () => {
  const [submittedData, setSubmittedData] = useState(null);

  if (submittedData) {
    return <TicketPay values={submittedData} />;
  }

  return (
    <TicketForm onSubmit={(data) => setSubmittedData(data)} />
  );
};

export default BuyTicket;
