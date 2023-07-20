import React from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Account = () => {

    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await signOut(auth);
          navigate("/singup")
          // Additional actions after successful logout (e.g., redirect to a different page)
        } catch (error) {
          // Handle any errors that might occur during the logout process
          console.error('Error during logout:', error);
        }
      };


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