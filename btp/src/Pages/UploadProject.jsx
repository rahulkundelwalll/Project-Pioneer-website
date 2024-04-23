import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UploadProject.css'

function UploadProject() {
    const [ProjectName, setProjectName] = useState("");
    const [ProjectDesc, setProjectDesc] = useState("");
    const [ProjectStrength, setProjectStrength] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const responseDataObj = JSON.parse(localStorage.auth);
        const token = responseDataObj.token
        const professorName = responseDataObj.user.pname

        const apiUrl = 'http://10.10.120.28/api/projects/addProject';

        const data = {
            name: ProjectName,
            description: ProjectDesc,
            strength: ProjectStrength,
            professorName:professorName,
        };

        console.log(data)

        try {
            const response = await axios.post(apiUrl, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("API call successful:", response.data);
            navigate('/faculty/dashboard');
        } catch (error) {
            console.error("API call failed:", error);
            // Handle error here
        } finally {
            setIsSubmitting(false);
        }
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
                    className='upload-input'
                    value={ProjectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    placeholder='Type Project Description'
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
