import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import store from './redux/store'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './index.css';

import App from './App';
import Category from './components/Category/Category'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/categories" element={<Category />}>
            <Route path=":categoryId" element={<Category />} />
          </Route>
          <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
