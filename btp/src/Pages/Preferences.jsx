import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import './pref.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

let options = [
    { value: 'PID1', label: 'Project1' },
    { value: 'PID2', label: 'Project2' },
    { value: 'PID3', label: 'Project3' },
];

export default function Preferences() {

  // const [Data,setData] = useState([])
  let Data;
  // let options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/projects/getProjects');
        Data = response.data.data
        for (let i = 0; i < Data.length; i++) {
          options[i].label = Data[i].pname
          
        }
        options[0].label = Data[0].pname
        options[1].label = Data[1].pname
        options[2].label = Data[2].pname
        options[3].label = Data[3].pname
        options[4].label = Data[4].pname
        // console.log(options)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData(); // Call the function to fetch data
  }, [Data,options]);


    const [preferences,setPreferences] = useState([]) 
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = () =>{
        navigate('/student/dashboard')
    }

    return (
        <div className='cont Db'>
        <div className="App">
            <h3 className='pref'>Preference 1</h3>
            <Select className='pref'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
        <div className="App">
            <h3 className='pref'>Preference 2</h3>
            <Select className='pref'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
        <div className="App">
            <h3 className='pref'>Preference 3</h3>
            <Select className='pref'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        {/* console.log(options) */}
        </div>
    );
}