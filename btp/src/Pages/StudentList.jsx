import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);
  
  const responseDataObj = JSON.parse(localStorage.auth);
  const token = responseDataObj.token

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://10.10.120.28/api/projects/getStudents', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        // Ensure response.data is an array before setting state
        if (Array.isArray(response.data.students[0])) {
          setStudents(response.data.students[0]);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
  
    fetchStudents();
  }, []);
  

  return (
    <div className='Db custom-table'>
      <h1>Student List</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Student Name</th>
            <th>Student email</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.sname}>
              <td>{student.project_name}</td>
              <td>{student.sname}</td>
              <td>{student.email}</td>
              <td>{student.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
