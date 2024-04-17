import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#003f87",
    color: "#ecf0f1",
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  };

  const textStyle = {
    margin: "8px 0",
  };

  return (
    <div style={footerStyle}>
      <h6 style={textStyle}>IIT JAMMU</h6>
      <p style={textStyle}>
        NH-44, PO Nagrota, Jagti, Jammu and Kashmir 181221 | Phone: 0191 257 0381 | Email: cif@iitjammu.ac.in
      </p>
      <div style={{ marginTop: "10px" }}>
        <p style={textStyle}>&copy; 2020 IIT Jammu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
