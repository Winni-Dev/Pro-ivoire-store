// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// const root = document.getElementById('root');

// if (root) {
//   // Use createRoot with automatic batching for better performance
//   ReactDOM.createRoot(root).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)