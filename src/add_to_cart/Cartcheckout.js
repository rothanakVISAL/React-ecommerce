import React from 'react';
import '../bootstrap/bootstrap.min.css';
import img_cart1 from '../add_to_cart/imgs/checkout_1.jpg';


const Cartcheckout = () =>{
    return(
        <div className="container py-5">
            <div className="row border border-dark rounded">
                <div className="col-6">
                    <div className="row p-3">
                        <div className="col-12 text-center">
                            <img src={img_cart1} className="rounded" alt="" />
                        </div>
                        <div className="col-12 bg bg-light rounded d-flex text-center mt-4">
                            <div className="col-md-4 col-6 my-4">
                                <p className="text-muted">CPU</p>
                                <p className="h5">Core i7 12700H<span className="ps-1"></span></p>
                            </div>
                            <div className="col-md-4 col-6  ps-30 my-4">
                                <p className="text-muted">Ram</p>
                                <p className="h5 m-0">32 GB</p>
                            </div>
                            <div className="col-md-4 col-6 ps-30 my-4">
                                <p className="text-muted">SSD</p>
                                <p className="h5 m-0">1 TB</p>
                            </div>
                        </div>
                        <div className="col-12 p-1 bg bg-light rounded d-flex text-center">
                            <div className="col-md-4 col-6 ps-30 my-4">
                                <p className="text-muted">Graphic Card</p>
                                <p className="h5 m-0">RTX 3080TI</p>
                            </div>
                            <div className="col-md-4 col-6 ps-30 my-4">
                                <p className="text-muted">Color</p>
                                <p className="h5 m-0">Black</p>
                            </div>
                            <div className="col-md-4 col-6 ps-30 my-4">
                                <p className="text-muted">Screen</p>
                                <p className="h5 m-0">1920 x 1080</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <div className="col-12 p-4 mr-2 mt-3 bg bg-light rounded">
                            <div className="d-flex align-items-end mt-4 mb-2">
                                <p className="h4 m-0"><span className="pe-1">ASUS ROG Duo 2022</span><span className="pe-1"></span><span
                                        className="pe-1"></span></p>
                                <p className="ps-3 textmuted"></p>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <p className="textmuted">Qty</p>
                                <p className="fs-14 fw-bold">1</p>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="textmuted">Subtotal</p>
                                <p className="fs-14 fw-bold"><span className="fas fa-dollar-sign pe-1"></span>2599 $</p>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="textmuted">Shipping</p>
                                <p className="fs-14 fw-bold">Free</p>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="textmuted">Discount</p>
                                <p className="fs-14 fw-bold">-<span className="fas fa-dollar-sign px-1"></span>100</p>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <p className="textmuted fw-bold">Total</p>
                                <div className="d-flex align-text-top ">
                                    <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span><span className="h6 fw-bold">2499$</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-3">
                            <div className="row bg-info mt-2 rounded">
                                <div className="col-12 px-4 mt-3">
                                    <p className="fw-bold">Payment detail</p>
                                </div>
                                <div className="px-4">
                                    <div className="d-flex mb-4">
                                        <span className="col-6">
                                            <p className="text-muted">Card number</p>
                                            <input className="form-control" type="text" value=""
                                                placeholder="1111 2222 2222 3333" />
                                        </span>
                                        <div className="col-6 d-flex flex-column align-items-end">
                                            <p className="text-muted">Expires</p>
                                            <input className="form-control" type="text" value="" placeholder="mm/yyyy" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-5">
                                        <span className="col-6">
                                            <p className="text-muted">Cardholder name</p>
                                            <input className="form-control" type="text" value="name"
                                                placeholder="Name" />
                                        </span>
                                        <div className="col-6 d-flex flex-column align-items-end">
                                            <p className="text-muted">CVC</p>
                                            <input className="form-control" type="text" value="" placeholder="xxxxxxxx" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="btn btn-info fw-bold rounded">Purchase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartcheckout;