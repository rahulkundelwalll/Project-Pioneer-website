import React from 'react';

const ContactComponent = () => {
  const contactStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust as needed
    textAlign: 'center',
    border: '2px solid black', // Border style
    padding: '20px', // Add padding for better appearance
    borderRadius: '10px' // Add border radius for rounded corners
  };

  return (
    <div style={contactStyle}>
      <div>
        <h2>Contact Details</h2>
        <p>
          Indian Institute of Technology Jammu <br />
          Jagti, NH-44, PO Nagrota <br />
          Jammu - 181 221 J&K, India
        </p>
        <h3>Welcome Contacts</h3>
      </div>
    </div>
  );
};

export default ContactComponent;
