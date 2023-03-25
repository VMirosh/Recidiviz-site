import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import state from "./data/data";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App state={state}/>
);


