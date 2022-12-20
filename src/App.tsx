import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Layout from './application/Layout';
import './assets/styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@coreui/dist/css/coreui.min.css';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
