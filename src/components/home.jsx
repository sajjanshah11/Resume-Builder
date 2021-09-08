import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import Navbar from "./navbar";
import "./css/home.css"
import { useDispatch } from "react-redux";
import { templateAction } from "../redux/actions/templateAction";



let Home = () => {

    let user = useSelector(state => state.user)
    let dispatch = useDispatch()

    let history = useHistory()

    // let state = useSelector(state => state.template)
    // console.log(state)


    return (
        <>
            <Navbar />
            {user ? "" : <Redirect to="/login" />}
            <button className="logout-btn btn btn-danger" onClick={() => {
                auth.signOut()
            }} >Logout
            </button>

            <div className="template-container">
                <div className="template" onClick={() => {
                    dispatch(templateAction("A"));
                    history.push("/personal")
                }}>
                    <img src="http://localhost:3000/skin1.svg" alt="" />
                </div>
                <div className="template" onClick={() => {
                    dispatch(templateAction("B"));
                    history.push("/personal")
                }}>
                    <img src="http://localhost:3000/skin2.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home;