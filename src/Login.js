import React from 'react';

function Login(props) {
    return (
        <>
            <div className="jbLogo">jamesbook</div>
            <div id="loginFrmWrapper">
                <form id="loginFrm" onSubmit={ props.loginFx }>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </>
    );
}

export default Login;