import { Link, useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
function Login() {
    const history=useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const signIn = e =>{
        e.preventDefault();
        
        //firbase 
        auth.signInWithEmailAndPassword(email,password)
            .then((auth =>{
                history.push('/')
            }))
            .catch(error =>alert(error.message))
       

    }
    const register = e=>{
        e.preventDefault();

        //firebase
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
             //it successfully created a user
             if(auth){
                 history.push('/')
             }
         })
        .catch(error=> alert(error.message))

    }
    return (
        <div className="login">
            <Link to="/login">
                <img className="login_logo"alt=""
                     src="Logo.jpg"/>
            
            </Link>
            <div className="login_container">
                <h1>Sign Up</h1>

                <form>
                    <h5>Email:</h5>
                    <input type='text' value={email} onChange=
                    {e=>setEmail(e.target.value)}/>

                    <h5>Password:</h5>
                    <input type='password' value={password} onChange=
                    {e=>setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signinButton">Sign in</button> 
                    
                </form>
                <p>
                    By Siging in you agree to the amazon
                    Fake Clone conditions.
                </p>
                <button type="submit" onClick={register} className="login_registerButton">Create Your Account</button>

            </div>
            
        </div>
    )
}

export default Login
