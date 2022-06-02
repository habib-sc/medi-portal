import React from 'react';
import './AdminContent.css';

const AdminContent = () => {
    return (
        <div className='dashboard-container'>
            <div className='dashboard-left'>
                <ul className='sidebar'>
                    <li><a href="#">Doctors</a>
                    </li>
                    <li><a href="#">Staffs</a>
                    </li>
                    <li><a href="#">Admins</a>
                    </li>
                </ul>
            </div>
            <div className='dashboard-right'>
                <div className='right-content'>
                    sdffsdfd
                </div>
            </div>
        </div>
    );
};

export default AdminContent;