import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth'
import './al.css';

export default function AllotedProject() {
  const [projectData, setProjectData] = useState(null);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    // Fetch project data from API

    axios.get(`http://10.10.120.28/api/auth/assignedProject/${auth.user.email}`)
      .then(response => {
        setProjectData(response.data.project);
        console.log(projectData.students)
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, []);

  return (
    <div className='alloted_cont'>
      {projectData ? (
        <>
          <h3>Your Final Allotted Project: <i className='italy'>{projectData.name}</i></h3>
          <br />
          <h3>Faculty Name: <i className='italy'>{projectData.faculty.name}</i></h3>
          <h3>Faculty Email: <i className='italy'>{projectData.faculty.email}</i></h3>
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
              {projectData.students ? projectData.students.map((member, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                </tr>
              )) : 
              <tr key="999">
                  <td>"NA"</td>
                  <td>"NA"</td>
                  <td>"NA"</td>
                </tr>}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
  );
}
