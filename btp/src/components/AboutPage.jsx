import React from 'react';

const AboutPage = () => {
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
        <h1>About</h1>
        <p>
          This platform facilitates the allocation of Bachelor of Technology (B.Tech) <br />final year projects based on students' Cumulative Grade Point Average (CGPA). Through this website, students can seamlessly navigate the process of selecting their projects,<br /> ensuring a fair and efficient distribution according to their academic performance. Our system streamlines the project allotment process, enhancing transparency and equity <br />in project assignments for B.Tech fourth-year students.
        </p>
        {/* <h3>Welcome Contacts</h3> */}
      </div>
    </div>
  );
};

export default AboutPage;
