import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const { pathname } = useLocation();

    // Acitive style for menu 
    let activeStyle = {
        backgroundColor: "#FDAD64",
        padding: '5px',
        color: 'white',
        borderRadius: '6px',
        width: '94%'
      };

    return (
        <div className='dashboard-container'>
            <div className='dashboard-left'>
                <ul className='sidebar'>

                    {/* Admin route item  */}
                    { pathname.includes('/dashboard/admin') &&
                    <>
                        <li>
                        <NavLink to='/dashboard/admin/doctors' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                           <span> Doctors</span>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/admin/staffs' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>Staffs</span>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/admin/admins' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>Admins</span>
                            </NavLink>
                        </li>


                        <li>
                        <NavLink to='/dashboard/admin/add-doctor' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Add Doctor</span>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/admin/add-staff' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                           <span>Add Staff</span>
                           </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/admin/add-admin' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Add Admin</span>
                            </NavLink>
                        </li>
                    </>}



                    {/* Doctor route item  */}
                    { pathname.includes('/dashboard/doctor') &&
                    <>
                        <li>
                        <NavLink to='/dashboard/doctor/patients' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>patients</span>
                        </NavLink>
                        </li>
                    </>}



                    {/* Staff route item  */}
                    { pathname.includes('/dashboard/staff') &&
                    <>
                        <li>
                        <NavLink to='/dashboard/staff/patients' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                           <span>patients</span>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/staff/add-patient' className='list-item' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Add patient</span>
                        </NavLink>
                        </li>
                    </>}

                </ul>
            </div>
            <div className='dashboard-right'>
                <div className='right-content'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;