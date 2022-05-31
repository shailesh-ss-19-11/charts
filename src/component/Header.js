import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <p href="#default" className="logo">
          Profile & Stats
        </p>
        <div className="header-right">
          <p className="active" href="#home">
            <i className="fa fa-print" aria-hidden="true"></i>
          </p>
          <p href="#contact">
            Conversation <i className="fa fa-angle-down" aria-hidden="true"></i>
          </p>
          <p href="#about">
            <button>Ticket 11</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
