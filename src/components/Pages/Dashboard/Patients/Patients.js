import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Patients = () => {
    const [patients, setPatients] = useState();
    const { pathname } = useLocation();
    

    useEffect( () => {
        fetch('/patients.json')
        .then(res => res.json())
        .then(data => setPatients(data))
    }, []);
    return (
        <div>
            {pathname.includes('/dashboard/doctor') &&
                <Chart></Chart>
            }
            <table id="table">
                <thead>
                    <tr>
                        <th style={{borderTopLeftRadius: '8px'}}>Patient Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th style={{borderTopRightRadius: '8px'}}>Actions</th>
                    </tr>
                </thead>
                
                {patients &&
                <tbody>
                    {
                        patients.map(patient => <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                            <td className='actions-container'>
                                <button className='edit-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <div>
                                        View
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

export default Patients;