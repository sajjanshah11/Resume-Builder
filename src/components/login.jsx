import { auth } from "../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";

let Login = () => {
    let history  = useHistory();
    let user = useSelector(state => state.user);
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    return (
        <>
            {user ? <Redirect to = "/" /> : ""}
            <div className="row">
                
                <div className="col-4 offset-md-4"> 
                <h1>LOGIN</h1>
                    <form className = "mt-5">
                        <div class="mb-3 ">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                onChange = {(e)=>{
                                    setEmail(e.currentTarget.value);
                                }}
                                />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="exampleInputPassword1"
                                onChange = {(e)=>{
                                    setPassword(e.currentTarget.value);
                                }}
                                />
                        </div>
                        <button 
                            type="submit" 
                            class="btn btn-primary"
                            onClick = {(e)=>{
                                e.preventDefault();
                                auth.createUserWithEmailAndPassword(email,password)
                            }}
                            >Login</button>
                        <br/>
                        <br/>
                        <button type="submit" class="btn btn-primary" onClick = {()=>{
                            history.push("/signup");
                        }}>Signup</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;