import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          {/* Repeat for other product images */}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          {/* Repeat for other stars or use a loop */}
          <img src={star_dull_icon} alt="" />
          {/* Repeat for other empty stars or use a loop */}
        </div>
        <p>(122)</p>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dicta provident sapiente perspici
          atis in, nostrum magni quae ratione dolorum aut labore aspernatur vel officiis nisi quidem aliquam nobis! Accusantium, ea?
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
         <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
         </div>
          
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category :</span>Women,T-shirt,Crop Top
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span>Modern,Latest,Smart
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
