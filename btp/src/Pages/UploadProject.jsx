import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadProject.css'; // Import your CSS file for styling

function UploadProject() {
    const [ProjectName, setProjectName] = useState("");
    const [ProjectDesc, setProjectDesc] = useState("");
    const [ProjectStrength, setProjectStrength] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/faculty/dashboard');
    };

    return (
        <div className='upload-container'>
            <div className='upload-content'>
                <span className='upload-label'>Enter Project Name:</span>
                <input
                    className='upload-input pname'
                    type="text"
                    value={ProjectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder='Type Project Name'
                />
            </div>
            <div className='upload-content'>
                <span className='upload-label'>Enter Project Description:</span>
                <textarea
                    value={ProjectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    placeholder='Type Project Description'
                    className='upload-textarea desc'
                />
            </div>
            <div className='upload-content'>
                <span className='upload-label'>Enter Project Strength:</span>
                <input
                    className='upload-input pstrength'
                    type="text"
                    value={ProjectStrength}
                    onChange={(e) => setProjectStrength(e.target.value)}
                    placeholder='0'
                />
            </div>
            <button className='upload-button' type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default UploadProject;
