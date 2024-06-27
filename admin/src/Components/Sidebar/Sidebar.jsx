import React from 'react';
import { Link } from 'react-router-dom';
import addProductIcon from '../../assets/Product_Cart.svg';
import listProductIcon from '../../assets/Product_list_icon.svg';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={addProductIcon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={listProductIcon} alt="" />
                    <p>List Product</p>
                </div>
            </Link>

            <Link to={'/listpayment'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={listProductIcon} alt="" />
                    <p>List payments</p>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;

