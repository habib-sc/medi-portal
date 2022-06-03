import React from 'react';
import './AddPatient.css';

const AddPatient = () => {
    return (
        <div>
            <form>
                <h2>Add A Patient</h2>
                <div className='form-group'>
                    <div className='input-group'>
                        <label htmlFor="name">Patient Name:</label> <br />
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

export default AddPatient;