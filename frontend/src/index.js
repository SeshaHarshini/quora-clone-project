import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Newsletter from './components/Newsletter';
import reportWebVitals from './reportWebVitals';
import TimeAgo from "javascript-time-ago";
import store from './app/store';
import en from "javascript-time-ago/locale/en.json";
import {Provider} from 'react-redux';
import { Route,Routes,BrowserRouter as Router} from 'react-router-dom'
// import 'bootswatch/dist/slate/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

TimeAgo.addDefaultLocale(en);
//TimeAgo.addLocale(en);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <Router>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/newsletter' element={<Newsletter/>}/>
            </Routes>
       </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
