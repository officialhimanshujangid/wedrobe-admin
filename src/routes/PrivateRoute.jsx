/* eslint-disable react/prop-types */
// import { Navigate } from 'react-router-dom';
// import { isLogin } from '../utils/api';

// const PrivateRoute = ({ element, ...rest }) =>
//   isLogin() ? element : <Navigate to="/" state={{}} />;

// export default PrivateRoute;


// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ element }) => {
//   const { auth } = useSelector(state => state.auth);
//   return  auth  ? element : <Navigate to="/" />;
// };

// export default PrivateRoute;


import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
function PrivateRoute({ element }) {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("user"))
  
    useEffect(() => {
      if (!auth) {
        navigate('/');
      }
    }, []);
  
    return <>{element}</>;
  }
  export default PrivateRoute