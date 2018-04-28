// app/index.js

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
import reduxPromise from 'redux-promise';
import Calculator from './src/conectors/Calculator'
import thunk from 'redux-thunk';

// const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const App = () => {
  const store = createStore(rootReducer, applyMiddleware(reduxPromise, thunk));
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;