import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import Calculator from './components/calculator.js';
import './index.css';

// ReactDOM.render(<Calculator />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Calculator />
    </React.StrictMode>
);