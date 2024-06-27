import React, { useState, useContext, useEffect } from 'react';
import './CSS/LoginSignup.css';
import { ShopContext } from '.././context/ShopContext';

const LoginSignup = () => {
  const { updateUserEmail} = useContext(ShopContext);
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function executed", formData);
    let responseData;
    await fetch('http://localhost:4002/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      updateUserEmail(formData.email); // Update email in context
      window.location.replace('/');
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
    console.log("SignUP function executed", formData);
    let responseData;
    await fetch('http://localhost:4002/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      updateUserEmail(formData.email); // Update email in context
      window.location.replace('/');
    } else {
      alert(responseData.errors);
    }
  };

  // useEffect(() => {
  //   // This will alert whenever userEmail changes
  //   alert(userEmail);
  // }, [userEmail]);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={() => { state === "Login" ? login() : signUp() }}>Continue</button>
        {state === "Sign Up" ?
          <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login</span></p> :
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
        }

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

















































// import React, { useState, useContext } from 'react';
// import './CSS/LoginSignup.css';
// import { ShopContext } from '.././context/ShopContext';

// const LoginSignup = () => {
//   const { updateUserEmail } = useContext(ShopContext);
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//   });

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     console.log("login function executed", formData);
//     let responseData;
//     await fetch('http://localhost:4002/user/login', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//     .then((response) => response.json())
//     .then((data) => (responseData = data));

//     if (responseData.success) {
//       localStorage.setItem('auth-token', responseData.token);
//       updateUserEmail(formData.email); // Update email in context
//       window.location.replace('/');
//     } else {
//       alert(responseData.errors);
//     }
//   };

//   const signUp = async () => {
//     console.log("SignUP function executed", formData);
//     let responseData;
//     await fetch('http://localhost:4002/user/signup', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//     .then((response) => response.json())
//     .then((data) => (responseData = data));

//     if (responseData.success) {
//       localStorage.setItem('auth-token', responseData.token);
//       updateUserEmail(formData.email); // Update email in context
//       window.location.replace('/');
//     } else {
//       alert(responseData.errors);
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
//           <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
//           <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
//         </div>
//         <button onClick={() => { state === "Login" ? login() : signUp() }}>Continue</button>
//         {state === "Sign Up" ?
//           <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login</span></p> :
//           <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
//         }

//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id='' />
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;