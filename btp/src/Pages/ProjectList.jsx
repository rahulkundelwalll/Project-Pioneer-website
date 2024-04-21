import React, { useState, useEffect } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from server
    fetch('your_api_endpoint')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div className='Db custom-table'>
      <h1>Project List</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Faculty name</th>
            <th>Faculty email</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the projects state to render table rows */}
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.facultyName}</td>
              <td>{project.facultyEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
