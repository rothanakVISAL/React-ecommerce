import React from 'react';
import '../bootstrap/bootstrap.min.css';
import img_cart1 from '../add_to_cart/imgs/cart1.jpg';
import {MdDeleteForever} from 'react-icons/md';
import {Link} from 'react-router-dom';

const Cart = () =>{
    return(
        <div className="container bg bg-light p-3 my-5">
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="justify-content-center">
                        <td>1</td>
                        <td><img src={img_cart1} title="Apple" alt=' ' /></td>
                        <td>MacBook pro 2022</td>
                        <td>White</td>
                        <td>789 $</td>
                        <td className="w-25"><input type="number" step="1" min="1" max="" defaultValue={1}/></td>
                        <td>789 $</td>
                        <td className="text-center cursor-pointer" title="Delete"><MdDeleteForever className="fa-lg text-danger" /></td>
                    </tr>
                    <tr>
                        <td colSpan={6} className="text-right">
                            <b>Total Amount</b>
                        </td>
                        <td className="text-danger"><b>789 $</b></td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex text-right py-1">
                <div className="border-danger mt-2 mr-2">
                    <button className="btn btn-info">Cancel Shipping</button>
                </div>
                <div className="border-danger m-2">
                    <button className="btn btn-info">Coutinue Shipping</button>
                </div>
                <div className="border-danger m-2">
                    <Link to="/cartcheckout"><button className="btn btn-info">Proceed to Checkout.</button></Link>
                </div>
            </div>

        </div>
    );
}

export default Cart;
