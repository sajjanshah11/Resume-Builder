import { useHistory } from "react-router";

let Login = () => {
    let history  = useHistory();
    return (
        <>
            <div className="row">
                
                <div className="col-4 offset-md-4"> 
                <h1>LOGIN</h1>
                    <form className = "mt-5">
                        <div class="mb-3 ">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
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