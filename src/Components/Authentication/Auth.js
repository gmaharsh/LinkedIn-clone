import React, { useState } from 'react';
import './Auth.css'

function Auth() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginToApp = (e) => {
        e.preventDefault();
     };
    const register = () => { 

    };

    return (
        <div className="auth">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="" />
            <form>
                <input
                    value={name}
                    placeholder="Full Name (required if registering)"
                    type="text"
                    onChange={ e => setName(e.target.value) }
                />
                <input placeholder="Profile pic URL(optional)" type="text" />
                <input
                    value={email}
                    placeholder="Email"
                    type="text"
                    onChange={ e => setEmail(e.target.value) }
                />
                <input
                    value={password}
                    placeholder="Enter Your Password"
                    type="password"
                    onChange={ e => setPassword(e.target.value) }
                />
                <button>Sign In</button>
            </form>
            <p>
                Not a Memeber?<span className="auth__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Auth
