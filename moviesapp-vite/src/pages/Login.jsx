import React from 'react';
import Header from '/src/components/Header';
import User from '/src/components/User';
import Footer from '/src/components/Footer';
import '/src/styles/Login.css'

const Login = () => {
    return (
        <div className='div-login'>
            <Header /><User /><Footer />
        </div>
    );
};

export default Login;