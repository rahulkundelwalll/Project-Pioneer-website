import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './pref.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from '../context/auth';

export default function Preferences() {
  const [options, setOptions] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.10.120.28/api/projects/project');
        const data = response.data.projec[0];
        const newOptions = data.map((project, index) => ({
          value: `PID${index}`,
          label: project.pname
        }));
        setOptions(newOptions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Call the function to fetch data
  }, []);

  const handleSubmit = async () => {
    const responseDataObj = JSON.parse(localStorage.auth);
    const user = responseDataObj.user.email;
    console.log(user);
    const url = `http://10.10.120.28/api/auth/updateStudent/${user}`;

    const firstPreference = preferences[0].label;
    const secondPreference = preferences[1].label;
    const thirdPreference = preferences[2].label;

    try {
      await axios.patch(url, {
        firstPreference,
        secondPreference,
        thirdPreference,
      });
      navigate('/student/dashboard');
    } catch (error) {
      console.error(error);
      throw new Error('Error updating student record');
    }
  };

  const handlePreferenceChange = (index, selectedOption) => {
    const newPreferences = [...preferences];
    newPreferences[index] = selectedOption;
    setPreferences(newPreferences);
  };

  return (
    <div className='cont Db'>
      <div className="App">
        <h3 className='pref'>Preference 1</h3>
        <Select className='pref'
          value={preferences[0]}
          onChange={selectedOption => handlePreferenceChange(0, selectedOption)}
          options={options}
        />
      </div>
      <div className="App">
        <h3 className='pref'>Preference 2</h3>
        <Select className='pref'
          value={preferences[1]}
          onChange={selectedOption => handlePreferenceChange(1, selectedOption)}
          options={options}
        />
      </div>
      <div className="App">
        <h3 className='pref'>Preference 3</h3>
        <Select className='pref'
          value={preferences[2]}
          onChange={selectedOption => handlePreferenceChange(2, selectedOption)}
          options={options}
        />
      </div>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
}
