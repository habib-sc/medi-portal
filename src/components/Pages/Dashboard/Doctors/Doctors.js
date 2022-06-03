import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState();
    

    // Loading Doctors 
    useEffect( () => {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, []);

    return (
        <div>
            {/* Chart  */}
            <Chart></Chart>

            {/* doctors table  */}
            <table id="table">
                <thead>
                    <tr>
                        <th style={{borderTopLeftRadius: '8px'}}>Doctors Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th style={{borderTopRightRadius: '8px'}}>Actions</th>
                    </tr>
                </thead>
                
                {doctors &&
                <tbody>
                    {/* Mappint doctors  */}
                    {
                        doctors.map(doctor => <tr key={doctor.id}>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.speciality}</td>
                            <td className='actions-container'>
                                <button className='edit-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <div>
                                        Edit
                                    </div>
                                </button>
                                <button className='delete-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    <div>
                                        Delete
                                    </div>
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
                }
          
            </table>
        </div>
    );
};

export default Doctors;