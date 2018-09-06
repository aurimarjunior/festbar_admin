import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Router from './Routes';
import reducers from './reducers';

export default props => (
    <Provider store={createStore(reducers)}>
        <Router />
    </Provider>
);