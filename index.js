/**
 * @//Andre Barajas
//React Native App
//Summer 2019
 */
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import configureStore from './src/store/configureStore';

//getting store to pass to provider
const store = configureStore();

const RNRedux = () => (
    <Provider store={store}> 
        <App /> 
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
