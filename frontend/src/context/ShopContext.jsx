import React, { createContext, useEffect, useState } from "react";
// import all_product from "../components/Assets/all_product";
import {loadStripe} from '@stripe/stripe-js';


// Create a new context
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

// Define a component to provide the ShopContext
const ShopContextProvider = (props) => {
  // Define the context value to be provided

  const [all_product,setAll_product]=useState([]);
  const [cartItems,setcartItems]=useState(getDefaultCart());
  const [userEmail,setUserEmail]=useState("aziz@gmail.com");


  useEffect(() => {
    fetch('http://localhost:4002/product/allproduct') 
      .then((response) => response.json())
      .then((data) => setAll_product(data));
  
    // Check if authentication token exists
    const authToken = localStorage.getItem('auth-token');
    if (authToken) {
      fetch('http://localhost:4002/cart/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': authToken,
          'Content-Type': 'application/json',
        },
        body: "", // You can send an empty body or omit it
      })
      .then((response) => response.json())
      .then((data) => setcartItems(data));
    }
  }, []);
  
  

const addToCart = (itemId) => {
  setcartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
  const token = localStorage.getItem('auth-token');
  if (token) {
    fetch('http://localhost:4002/cart/addtocart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'auth-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId: itemId }), // Include itemId in the body
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}



const removeFromCart = (itemId) => {
    setcartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('http://localhost:4002/cart/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId }), // Include itemId in the body
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  
  
  
  } 

const updateUserEmail = (email) => {
    setUserEmail(email);
    alert(email);
  }
const getTotalCartAmount = () => 
{
      let totalAmount = 0;
      for (let item in cartItems) {
          if (cartItems[item] > 0) {
              let itemInfo = all_product.find(product => product.id === Number(item));
              totalAmount += itemInfo.new_price * cartItems[item];
          }
      }
      return totalAmount; // Move return statement outside the loop
}

const getTotalCartItems = () => 
{
  let totalItem = 0;
  for (let item in cartItems) {
      if (cartItems[item] > 0) {
          totalItem +=cartItems[item];
      }
  }
  return totalItem; // Move return statement outside the loop
}
let cartItemsArray = [];
all_product.forEach(e => {
  // Check if the item exists in the cart (cartItems) and its quantity is greater than 0
  if (cartItems[e.id] > 0) {
      // Create an object representing the item and its details
      let item = {
          id: e.id,
          image: e.image,
          name: e.name,
          price: e.new_price,
          quantity: cartItems[e.id],
          total: e.new_price * cartItems[e.id]
      };

      // Push the item object into the cartItemsArray
      cartItemsArray.push(item);
  }
});

const makePayment = async () => {
  const authToken = localStorage.getItem('auth-token');
  if (!authToken) {
      // Redirect to login page or show error message
      alert("You need to be logged in to make a payment");
      window.location.href = "/login";
      return;
  }

  const stripe = await loadStripe("pk_test_51PH7DW07mOlkGGNsdpUm1Oi8DPcIIh4Tk5BWqslnTkbBXTlXOfIlhOvxT1FyWVAVL1tp0g3ABt5OYMxedV5g9BOn00fSzeSyIy");
  
  const body = {
      product: cartItemsArray,
      userEmail: userEmail  // Change 'Email' to 'userEmail'
  }
  const headers = {
      "Content-Type": "application/json",
      "auth-token": authToken
  }
  const response = await fetch("http://localhost:4002/payment/createcheckout", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
  });

  const session = await response.json();

  const result = stripe.redirectToCheckout({
      sessionId: session.id
  });
  
  if (result.error) {
      console.log(result.error.message);
  }
}



      const contextValue = { makePayment,getTotalCartItems,getTotalCartAmount,all_product,cartItems,updateUserEmail,addToCart,removeFromCart };
  // Render the ShopContext.Provider with the context value and children
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Export the ShopContextProvider component
export default ShopContextProvider;
