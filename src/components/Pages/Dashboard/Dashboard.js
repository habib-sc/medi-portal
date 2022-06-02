import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div className='dashboard-container'>
            <div className='dashboard-left'>
                <ul className='sidebar'>
                    {/* Admin route item  */}
                    { pathname.includes('/dashboard/admin') &&
                    <>
                        <li className='list-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <Link to='/dashboard/admin/doctors'>Doctors</Link>
                        </li>
                        <li className='list-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <Link to='/dashboard/admin/doctors'>Staffs</Link>
                        </li>
                        <li className='list-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <Link to='/dashboard/admin/doctors'>Admins</Link>
                        </li>


                        <li className='list-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#">Add Doctor</a>
                        </li>
                        <li className='list-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#">Add Staff</a>
                        </li>
                        <li className='list-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#">Add Admin</a>
                        </li>


                    </>}

                    {/* Doctor route item  */}
                    { pathname === '/doctor' &&
                    <>
                        <li><a href="#">patients</a></li>
                    </>}

                    {/* Staff route item  */}
                    { pathname === '/staff' &&
                    <>
                        <li><a href="#">patients</a></li>
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