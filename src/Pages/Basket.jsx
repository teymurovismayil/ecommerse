import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Basket() {
    const [info, setinfo] = useState([])
    const [count, setcount] = useState(1)
    useEffect(() => {
        axios.get('http://localhost:3000/basket')
            .then(res => {
                setinfo(res.data)
            })
    }, [])


    const inc = () => {
        setcount(count + 1)
    }

    const dec = () => {
        setcount(count - 1)
    }

    if (count < 1) {
        setcount(1)
    }

    return (
        <>

            <div className='outwear-title'>
                <h2 className='outwear-title__text'>Shopping Cart</h2>
            </div>
            <section id='products' className='container mt-5'>
                <table className='basket-table'>
                    <thead>
                        <tr>
                            <th>Your cart Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        {
                            info.map((el, i) => {
                                return (
                                    <tr key={i} className='border'>
                                        <td>
                                            <div className='d-flex align-items-center gap-3'>
                                                <div className='basket-table__image'>
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
                                        <td>
                                            <div className='d-flex'>
                                                <button onClick={dec} className='p-1 fs-5 border-0 bg-secondary'><span>-</span></button>
                                                <div className='p-1 fs-5 bg-secondary'><span>{count}</span></div>
                                                <button onClick={inc} className='p-1 fs-5 border-0 bg-secondary'><span>+</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>

            </section>
        </>
    )
}

export default Basket