import React, { useEffect, useState } from 'react'
import { useAuth } from '../Componentss/Context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




function Profile() {
    const [info, setinfo] = useState([])
    const { user, logout } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/')
          .then(res => {
            setinfo(res.data)
          })
      }, [])
    const handleLogOut = async () => {
        logout(() => {
            navigate("/")
        });
    };
    
    return (
        <>
            {
                info.map((el,i)=>{
                    return(
                        <div key={i}>
                            {
                                el.email
                            }
                        </div>
                    )
                })
            }

            <code>{JSON.stringify(user)}</code>
            <button className='btn btn-outline-danger' onClick={handleLogOut}>Log Out</button>
        </>
    )
}

export default Profile