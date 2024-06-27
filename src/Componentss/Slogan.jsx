import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";



const Slogan = () => {
    return (
        <>
            <section id='slogan'>
                <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel" data-interval="5000">
                    <div className="carousel-inner ">
                        <div className="carousel-item active  ">
                            <img className="d-block w-100 silde-img " src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/slideshow1_467b6234-0b4e-44aa-b18e-5d1f5d315033.jpg?v=1704686216&width=3840" />
                        </div>
                        <div className="carousel-item ">
                            <img className="d-block w-100 silde-img" src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/slideshow3_ef556d7c-cfcf-48e5-99f3-614cf21eb069.jpg?v=1704686066&width=3840" />
                        </div>
                        <div className="carousel-item    ">
                            <img className="d-block w-100 silde-img" src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/slideshow2_c983fffc-054c-41dd-8dbf-d3d3396eff76.jpg?v=1704686030&width=3840" />
                        </div>
                    </div>
                </div>
                <div className="container  mt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex align-items-center gap-3">
                            <div className='fs-1 d-flex align-items-center'>
                                <LiaShippingFastSolid />
                            </div>
                            <div>
                                <h3 className='slogan__text'>Free Shipping</h3>
                                <p>You will love at great low prices</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-center gap-3">
                            <div className='fs-1 d-flex align-items-center'>
                                <MdOutlinePayment />
                            </div>
                            <div>
                                <h3 className='slogan__text'>Flexible Payment</h3>
                                <p>Pay with Multiple Credit Cards</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-center gap-3">
                            <div className='fs-1 d-flex align-items-center'><IoMdReturnLeft /></div>
                            <div>
                                <h3 className='slogan__text'>14 Day Returns</h3>
                                <p>Within 30 days for an exchange</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-center gap-3">
                            <div className='fs-1 d-flex align-items-center'><BiSupport /></div>
                            <div>
                                <h3 className='slogan__text'>Premium Support</h3>
                                <p>Outstanding premium support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slogan