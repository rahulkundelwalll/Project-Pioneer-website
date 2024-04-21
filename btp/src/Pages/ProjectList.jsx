import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.10.120.28/api/projects/project');
        // console.log(response.data.projec[0])
        setProjects(response.data.projec[0]);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
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
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the projects state to render table rows */}
          {Array.isArray(projects) && projects.map((project, index) => (
            <tr key={index}>
              <td>{project.pname}</td>
              <td>{project.description}</td>
              <td>{project.professor}</td>
              <td>{project.professor}</td>
              <td>{project.strength}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
