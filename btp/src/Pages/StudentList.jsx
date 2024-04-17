import React from 'react'

function StudentList() {
  return (
    <div className='Db custom-table'>
      <h1>Student List</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Student Name</th>
            <th>Student id</th>
            <th>Student email</th>
            <th>CGPA</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project 1</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
          <tr>
            <td>Project 2</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
          <tr>
            <td>Project 3</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
