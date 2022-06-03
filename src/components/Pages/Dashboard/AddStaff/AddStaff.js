import React from 'react';

const AddStaff = () => {
    return (
        <div>
             <form>
                <div className='form-group'>
                    <div className='input-group'>
                        <label htmlFor="username">Username:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="name">Staff Name:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="designation">Designation:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address:</label> <br />
                        <input type="text" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="description">Description:</label> <br />
                        <textarea type="text" />
                    </div>
                </div>
                <button className='primary-btn'>Add Now</button>
            </form>
        </div>
    );
};

export default AddStaff;