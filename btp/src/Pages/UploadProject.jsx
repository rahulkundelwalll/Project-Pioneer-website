import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function UploadProject() {
    const [ProjectName, setProjectName] = useState("")
    // console.log(ProjectName)
    const [ProjectDesc, setProjectDesc] = useState("")
    const [ProjectStrength, setProjectStrength] = useState()
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/faculty/dashboard')
    }
    return (
        <div className='upload Db'>
            <div className='upload-cont'>
                <span className='sp'>Enter Project Name:</span>
                <input className='pname' type="text" value={ProjectName} onChange={(e) => setProjectName(e.target.value)} placeholder='Type Project Name' />
            </div>
            <div className='upload-cont'>
            <span className='sp'>Enter Project Description:</span>
                <textarea value={ProjectDesc} onChange={(e) => setProjectDesc(e.target.value)} placeholder='Type Project Description' className='desc' />
            </div>
            <div className='upload-cont'>
            <span className='sp'>Enter Project Strength:</span>
                <input className='pstrength' type="text" value={ProjectStrength} onChange={(e) => setProjectStrength(e.target.value)} placeholder='0' />
            </div>

            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UploadProject
