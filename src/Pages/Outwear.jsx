import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import axios from 'axios'

function Outwear() {
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => setinfo(res.data))
    }, [])


   
    return (
        <>

            <div className='outwear-title'>
                <h2 className='outwear-title__text'>Tee</h2>
                <p>Shop through our latest selection</p>
            </div>
            <div className='container mt-5'>
                <select>
                    <option value="">a</option>
                    <option value="">b</option>
                </select>
            </div>
            <section id='products' className='container mt-5'>
                <div className="mt-5">
                    <div className="row">
                        {
                            info.map((el) => {
                                return (
                                    <div className="col-6 col-lg-3  mb-5">
                                        <div>
                                            <div className='buttons-box'>
                                                <img src={el.img} />
                                                <div className="products-buttons">
                                                    <div className="products-button">
                                                        <BsCart3 />
                                                    </div>
                                                    <div className="products-button">
                                                        <FaRegHeart />
                                                    </div>
                                               
                                                </div>
                                            </div>
                                            <div className='cards'>
                                                <h6 className='cards__about'>{el.about}</h6>
                                                <h5><span>$</span>{el.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>

        </>
    )
}

export default Outwear