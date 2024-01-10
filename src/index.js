import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import VenueServices from './VenueServices';
import SkipTheLineRegister from './SkipTheLineRegister';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './state/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/venue-services' element={<VenueServices />} />
          <Route path='/skiptheline-registration' element={<SkipTheLineRegister />} />
        </Routes>
      </Router>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
