import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux' 

import thunk from 'redux-thunk'

import {rootReducer} from './reducer'
import mySaga from './sagas'

import App from './App';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware),applyMiddleware(thunk)) )

sagaMiddleware.run(mySaga)

ReactDOM.render(

  <React.StrictMode>
  <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
