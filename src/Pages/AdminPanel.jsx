import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function AdminPanel() {
  const [info, setinfo] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/products')
    .then(res => setinfo(res.data))
  }, [])
  
  const navigate = useNavigate()
  const openUsers = () => {
    navigate('/users')
  }
  const {id} = useParams()
  const deleteProduct = (id) => {
    axios.delete('http://localhost:3000/products/'+id)
  }
  return (
    
    <>

      <h1 className='text-center'>Admin Panel</h1>

      <button onClick={openUsers} className='btn btn-secondary'>Users</button>
      <table className='admin-table'>
        <thead>
          <tr>
            <th>Your cart Product</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {
            info.map((el, i) => {
              return (
                <tr key={i} className='border'>
                  <td>
                    <div className='d-flex align-items-center gap-3'>
                      <div className='admin-table__image'>
                        <img src={el.img} />
                      </div>
                      <p>
                        {el.about}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex'>
                      <span>$</span>
                      <p>
                        {el.price}
                      </p>
                    </div>
                  </td>
                  <td><button onClick={(e)=>deleteProduct(el.id)} className='btn btn-danger'>Delete</button></td>
                </tr>
              )
            })
          }
        </thead>
      </table>


    </>
  )
}

export default AdminPanel