import React from 'react';
import '/src/styles/User.css';

const User = () => {
    return (
        <div className='div-user'>
            <h1 className='h1-user'>Login</h1>
        <form className='form-user' method="post">
            <div className='div-email'>
                <label for="mail">email</label>
                <input className='input-email' type="text" name="mail" required></input>
            </div>
            <div className='div-password'>
                <label for="password">password</label>
                <input className='input-password' type="password" name="password" required></input>
            </div>
            <div className='div-btn'>
                <button className='btn-user' type="submit" name="button">OK</button>
            </div>
        </form>
        </div>
    );
};

export default User;