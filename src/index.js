import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/actions/reducers/rootReducer';
// import userReducer from './redux/actions/reducers/userReducer';


let myStore = createStore(rootReducer)

ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// myStore.subscribe(()=>{console.log(myStore.getState())});

