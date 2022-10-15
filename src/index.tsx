import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  //<React.StrictMode>   Commented out to prevent double-renders in dev mode. PROD should be fine with it.
    <App />
  //</React.StrictMode>

  /* eg.
  "scripts": {
      "dev": "webpack --mode development",
      "build": "webpack --mode production"
  }
  */

)
