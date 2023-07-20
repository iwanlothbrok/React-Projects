
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { createUser } = UserAuth()


    // function is an asynchronous function that handles the form submission.
    // When the user submits the form, it will be prevented from submitting the regular way (e.preventDefault()),
    // and the createUser function is called with the provided email and password.
    // If successful, it will navigate the user to the '/account' route. If there's an error during signup,
    // it will be caught, and the error message will be set in the state to display to the user.
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password)
            // which allows the component to programmatically navigate to a different route.
            alert("You have succsessfully logged in!")
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message);
        }
    }

    return (
        <div className='max-w-[700px] mx-auto my-16 p-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
                <p className='py-2'>
                    Already have an account yet?{' '}
                    <Link to='/' className='underline'>
                        Sign in.
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email Address</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='border p-3'
                        type='email'
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='border p-3'
                        type='password'
                    />
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;