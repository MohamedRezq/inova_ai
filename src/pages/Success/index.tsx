import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Success = (props: { orderNo: string }) => {
  return (
    <div className="success-wrapper">
      <p className="icon"></p>
      <h2>Thank you for your order!</h2>
      <p className="email-msg">Check your email inbox for the receipt.</p>
      <p className="description">
        If you have any questions, please email
        <a className="email" href="mailto:order@example.com">
          order@example.com
        </a>
      </p>
      <Link to="/">
        <button type="button" className="btn">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Success;
