// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { render } from "react-dom";


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import { render } from "react-dom";
import App from "./App";
import './index.css'


const root = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

