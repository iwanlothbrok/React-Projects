import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const ProtectedRouter = ({ children }) => {

    const { user } = UserAuth({});
    if (user === null) {
        alert("First you should log in!")
        return <Navigate to="/" />
    }

    return children;


}

export default ProtectedRouter;
