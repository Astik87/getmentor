import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from "./Context";

import UserState from "./state/UserState";

ReactDOM.render(
    <Context.Provider value={{
        user: new UserState()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
