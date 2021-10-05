import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './application/Layout';
import './assets/styles/App.scss';
import { store } from '@store/index';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback={<div>loading...</div>}>
                    <Layout />
                </Suspense>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
