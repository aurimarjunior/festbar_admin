import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}

export default App;