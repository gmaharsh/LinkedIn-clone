import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Auth.css'

function Auth() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
     };
    const register = () => { 
        if (!name) {
            return alert("Please Enter your Full Name")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }));
                    });
            })
            .catch((error) => alert(error.message));
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
                <input
                    value={profilePic}
                    placeholder="Enter Your Photo URL"
                    type="text"
                    onChange={ e => setProfilePic(e.target.value) }
                />
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
