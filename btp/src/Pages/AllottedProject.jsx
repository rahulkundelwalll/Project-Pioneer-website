import React from 'react';
import './al.css'

export default function AllotedProject() {
  const ProjectName = "";  
  const FacultyName = "";  
  const FacultyEmail = "";  
  const teamMembers = [
    { sno: 1, name: "John Doe", email: "Developer" },
    { sno: 2, name: "Jane Smith", email: "Designer" },
    { sno: 3, name: "Mike Johnson", email: "QA Tester" }
    // Add more team members as needed
  ];

  return (
    <div className='alloted_cont'>
      <h3>Your Final Allotted Project: {ProjectName}</h3>
      <br />
      <h3>Faculty Name: {FacultyName}</h3>
      <h3>Faculty Email: {FacultyEmail}</h3>
      <br />
      <h3>Team members:</h3>
      <table className="team-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map(member => (
            <tr key={member.sno}>
              <td>{member.sno}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
