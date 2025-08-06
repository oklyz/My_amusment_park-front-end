import React from "react";

const TicketPay = ({ values }) => {
  const ticketPrice = values.type === "VIP" ? 20 : 10;
  const subtotal = ticketPrice * values.amount;
  const tax = subtotal * 0.05; // 5% tax
  const serviceFee = 2; // flat service fee
  const total = subtotal + tax + serviceFee;

  return (
    <div className="ticket-pay-form">
      <h2>Payment Summary</h2>

      <div className="bill-details">
        <p>
          <strong>Ticket Type:</strong> {values.type}
        </p>
        <p>
          <strong>Date:</strong> {values.date}
        </p>
        <p>
          <strong>Quantity:</strong> {values.amount}
        </p>
        <p>
          <strong>Price per Ticket:</strong> ${ticketPrice}
        </p>
        <hr />
        <p>
          <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
        </p>
        <p>
          <strong>Tax (5%):</strong> ${tax.toFixed(2)}
        </p>
        <p>
          <strong>Service Fee:</strong> ${serviceFee.toFixed(2)}
        </p>
        <hr />
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      <form className="payment-form">
        <h4>Payment Method</h4>
        <select required className="payment-method">
          <option value="">Select Payment Method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple-pay">Apple Pay</option>
        </select>

        <button type="submit" className="pay-btn">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default TicketPay;
