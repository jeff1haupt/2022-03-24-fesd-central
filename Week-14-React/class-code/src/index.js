import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './clock';
import reportWebVitals from './reportWebVitals';
import FuncProps from './functionProps';
import FuncClass from './basicProps';
import ClockFunction from './clock-function';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClockFunction />
    {/* <Clock /> */}
  {/* <FuncProps day="Thursday" time={Date()} />
  <FuncProps day="Friday" time={Date()} />
  <FuncClass day="Saturday" /> */}
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
