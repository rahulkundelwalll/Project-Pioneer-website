import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'

function Dashboard1() {
    const [auth, setAuth] = useAuth();
    return (
        <div className='Db'>
            <h1>Hi User {auth.user ? auth.user.sname : null}</h1>
            <br />
            <div className='dash1'>

                <Link to="/student/preferences" className='text1'>
                    <div className='upload_project'>
                        Preferences
                    </div>
                </Link>
                <Link to="/student/projectList" className='text2'>
                    <div className='see_student_list'>
                        Project List

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard1
