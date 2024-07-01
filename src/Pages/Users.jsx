import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Users() {
    const [info, setinfo] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3000/users')
      .then(res=>setinfo(res.data))
    }, [])
    let {id} = useParams()
    const deleteUsers = (id) => {
        axios.delete('http://localhost:3000/users/'+id)
    }
    const navigate = useNavigate()
    const openProducts = () => {
      navigate('/adminpanel123')
    }
  return (
    <>
        <button onClick={openProducts} className='btn btn-secondary'>Products</button>
        <div className='container mt-5'>
            <table className='w-100 border'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Delete User</th>
                    </tr>
                    {
                        info.map((el,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{el.id}</td>
                                    <td>{el.firstName}</td>
                                    <td>{el.lastName}</td>
                                    <td>{el.email}</td>
                                    <td>{el.password}</td>
                                    <td><button onClick={(e)=>deleteUsers(el.id)} className='btn'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </div>
    </>
  )
}

export default Users
