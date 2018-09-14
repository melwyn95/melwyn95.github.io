import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./reducers/index";

import LoginContainer from "./containers/login-container";

const store = createStore(allReducers);

ReactDOM.render(
		<Provider store={store}>
      <LoginContainer />
		</Provider>,
    document.getElementById('root')
);
