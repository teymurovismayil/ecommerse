import React from 'react'
import { useAuth } from '../Componentss/Context/AuthContext';
import { useNavigate } from 'react-router-dom';




function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogOut = async () => {
        logout(() => {
            navigate("/")
        });
    };
    
    return (
        <>
            <code>{JSON.stringify(user)}</code>
            <button className='btn btn-outline-danger' onClick={handleLogOut}>Log Out</button>
        </>
    )
}

export default Profile