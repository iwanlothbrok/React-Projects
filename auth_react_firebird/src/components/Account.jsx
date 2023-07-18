import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Account = () => {



    return (
        <div className='max-w-[600px] mx-auto my-16 p-4'>
            <h1 className='text-2xl font-bold py-4'>Account</h1>
            <p>User Email: {user && user.email}</p>

            <button onClick={handleLogout} className='border px-6 py-2 my-4'>
                Logout
            </button>
        </div>
    );
};

export default Account;