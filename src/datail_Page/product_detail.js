import React from 'react';
import {Link} from 'react-router-dom';
import '../bootstrap/bootstrap.min.css';
import p_det_1 from './imgs/1.jpg';


function Product_detail(){
    return(
        <div className="container pt-4 pb-3">
            <div className="border border-dark rounded">
                <div className="card-body">
                    <div className="row d-flex pt-3">
                        <div className="col text-center">
                            <img src={p_det_1} className="img-fluid rounded" alt="#" style={{width:450,height:370}}/>
                        </div>
                        <div className="col">
                            <h3 className="mt-5"><strong>ASUS ROG STRIX G17</strong></h3>
                            <h6 className="mt-4 fs-30"><li>Normal price: <span className="text-danger fw-bold">2599 $</span></li></h6>
                            <h6 className="mt-4 fs-30"><li>Discount: <span className="text-danger fw-bold">16 %</span></li></h6>
                            <h6 className="mt-4">
                            <li>Available price: 
                                    <span className="text-danger fw-bold ml-1">2399 $</span>
                                </li>
                            </h6>
                            <button type="button" className="btn btn-dark btn-rounded mr-3 mt-4 justify-content-between" data-toggle="tooltip" title="Order" data-original-title="Add to cart">
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                            <Link to="/cart"><button  className="btn btn-danger mt-4"><small>ADD TO CARD</small></button></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3 className="box-title mt-5">General Info</h3>
                            <div className="table-responsive">
                                <table className="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td width="390">Brand</td>
                                            <td>yASUS ROG STRIX G17</td>
                                        </tr>
                                        <tr>
                                            <td>Ram</td>
                                            <td>16 GB</td>
                                        </tr>
                                        <tr>
                                            <td>SSD</td>
                                            <td>1 TB</td>
                                        </tr>
                                        <tr>
                                            <td>Graphic Card</td>
                                            <td>RTX 3080 TI 12 GB</td>
                                        </tr>
                                        <tr>
                                            <td>Display</td>
                                            <td>16"4K UHD (3840 x 2400) IPS-level panel 120Hz</td>
                                        </tr>
                                        <tr>
                                            <td>Wi-Fi</td>
                                            <td> 6TH</td>
                                        </tr>
                                        <tr>
                                            <td>Battery</td>
                                            <td>90W</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_detail;