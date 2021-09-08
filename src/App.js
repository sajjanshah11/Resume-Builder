import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home"
import { auth, firestore } from "./firebase"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userCreator } from "./redux/actions/userActions";
import PersonalData from "./components/personalData";



let App = () => {

  let dispatch = useDispatch();

  // let state = useSelector((state) => state)
  
  // console.log(state)

  useEffect(() => {

    let unsub = auth.onAuthStateChanged(async (user) => {

      dispatch(userCreator(user));

      if (user) {


        let { email, uid } = user;

        let docRef = firestore.collection("users").doc(uid);

        // console.log(docRef.get);

        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({
            email,
          })
        }

      }
    })

    return () => {
      unsub();
    }

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/personal">
            <PersonalData/>
          </Route>
          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/signup" >
            <Signup />
          </ Route>

          <Route path="/" >
            <Home />
          </ Route>

        </Switch>

      </div >
    </Router>
  );
}

export default App;
