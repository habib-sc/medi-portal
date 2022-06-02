import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className='dashboard-container'>
            <div className='dashboard-left'>
                <ul className='sidebar'>
                    {/* Admin route item  */}
                    { pathname.includes('/dashboard/admin') &&
                    <>
                        <li><Link to='/dashboard/admin/doctors'>Doctors</Link></li>
                        <li><a href="#">Staffs</a></li>
                        <li><a href="#">Admins</a></li>
                        <li><a href="#">Add Doctor</a></li>
                        <li><a href="#">Add Staff</a></li>
                        <li><a href="#">Add Admin</a></li>
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