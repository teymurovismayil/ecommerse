import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';


const TrendingProducts = () => {
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => setinfo(res.data))
    }, [])

    const filterProduct = info.filter((a) => a.kind == "trending")

    return (
        <>
            <section id='products' className='container mt-5'>
                <h1 className='mt-5'>Trending Products</h1>
                <div className="mt-5">
                    <div className="row">
                        {
                            filterProduct.map((el) => {
                                return (
                                    <div className="col-6 col-lg-3  mb-5">
                                        <div>
                                            <div className='buttons-box'>
                                                <Link className='text-decoration-none' to={'/trendingProductSale/' + el.id}>
                                                    <img src={el.img} />
                                                </Link>
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
                                                <Link className='text-decoration-none' to={'/trendingProductSale/' + el.id}>
                                                    <h6 className='cards__about'>{el.about}</h6>
                                                </Link>
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

export default TrendingProducts