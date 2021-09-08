import { useDispatch } from "react-redux";

import "./css/personalData.css";

import Preview from "./preview";

import { personalDetailsAction } from "../redux/actions/personalDetailsAction"
import { useSelector } from "react-redux";


let PersonalData = () => { 

    let dispatch = useDispatch();

    let details = useSelector(state => state.details)

    let {fname, lname, email, phone, city, state,summary,skill1,skill2,skill3,skill4}  = details
    
    return (
        <>
            <div className="container">
                <div className="personal-data-container">
                    <div className="row m-4">
                        <h2> Personal Details </h2>
                        <div className="col-4">
                            <input
                                value = {fname}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({fName:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="First Name"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {phone}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({phone:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="Phone"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {email}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({email:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="Email"
                                aria-label=".form-control-sm example">
                            </input>
                        </div>
                        <div className="col-4">
                            <input
                                email = {lname}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({lName:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="Last Name"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {city}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({city:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="City"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {state}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({state:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="State"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {summary}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({summary:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="summary"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {skill1}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({skill1:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="skill1"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {skill2}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({skill2:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="skill2"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {skill3}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({skill3:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="skill3"
                                aria-label=".form-control-sm example">
                            </input>
                            <input
                                value = {skill4}
                                onChange = {(e)=>{
                                    e.preventDefault();
                                    dispatch(personalDetailsAction({skill4:e.currentTarget.value}))
                                }}
                                class="form-control form-control-sm"
                                type="text" placeholder="skill4"
                                aria-label=".form-control-sm example">
                            </input>
                        </div>
                        <div className="row mt-5">
                            <div className="col offset-md-5">
                            <button type="button" class="btn btn-success">Next</button>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <Preview />

                
            </div>

        </>
    )
}

export default PersonalData