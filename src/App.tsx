import React from 'react';
import './App.css';
import Gupaio from './views/Gupaio';
import { Provider } from 'react-redux';
import store from './store/index';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Gupaio />
            </div>
        </Provider>
    );
};

export default App;
