import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'

function Dashboard1() {
    const [auth, setAuth] = useAuth();
    return (
        <div className='Db'>
            <h1>Hi User {auth.user.pname}</h1>
            <br />
            <div className='dash1'>

                <Link to="/faculty/uploadProject" className='text1'>
                    <div className='upload_project'>
                        Upload A new project
                    </div>
                </Link>
                <Link to="/faculty/studentList" className='text2'>
                    <div className='see_student_list'>
                        Student List

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard1
