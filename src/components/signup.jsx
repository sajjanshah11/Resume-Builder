import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { auth } from "../firebase"

let Signup = () => {
    let history = useHistory();
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [email, setEmail] = useState("")
    
    let state = useSelector(state => state)
    return (
        <>
            <div className="row">

                <div className="col-4 offset-md-4">
                    <h1>SIGNUP</h1>
                    <form className="mt-5">
                        <div class="mb-3 ">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                onChange = {(e)=>{
                                    // e.preventDefault();
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
                                    // e.preventDefault();
                                    setPassword(e.currentTarget.value)
                                }}
                                />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="exampleInputPassword2" 
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    setConfirmPassword(e.currentTarget.value)
                                }}
                                />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={() => {
                            history.push("/login")
                        }}>Login</button>
                        <br />
                        <br />
                        <button 
                            type="submit" 
                            class="btn btn-primary" 
                            onClick = {(e)=>{
                                e.preventDefault();
                                if(password === confirmPassword){
                                    auth.createUserWithEmailAndPassword(email,password);
                console.log(state)

                                }
                            }}
                            >Signup</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup;