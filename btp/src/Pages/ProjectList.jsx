import React from 'react'

function ProjectList() {
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
          <tr>
            <td>Project 1</td>
            <td>xxx</td>
            <td>Faculty 1</td>
            <td>faculty1@one.com</td>
          </tr>
          <tr>
            <td>Project 2</td>
            <td>xxx</td>
            <td>Faculty 2</td>
            <td>faculty2@one.com</td>
          </tr>
          <tr>
            <td>Project 2</td>
            <td>xxx</td>
            <td>Faculty 2</td>
            <td>faculty2@one.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProjectList
