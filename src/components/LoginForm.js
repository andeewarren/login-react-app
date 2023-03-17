import React from 'react';
import SubmitButton from './SubmitButton';

function LoginForm() {
    return (  
        <div id="loginForm" className="container">
            <h3>Please login here</h3>
            <label htmlFor="Username/Email"></label>
            <input type="text" placeholder="Username/Email"></input><br></br>
            <label htmlFor="Password"></label>
            <input type="password" placeholder="Password"></input>
            {SubmitButton()}
        </div>
    );
}

export default LoginForm;