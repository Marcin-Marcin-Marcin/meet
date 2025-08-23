import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// --- Atatus (RUM) init ---
import * as atatus from 'atatus-spa';
atatus.config('b1c6a6afddf04ea4b1b3a1fe30e35054').install();
// --- end Atatus init ---

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

serviceWorkerRegistration.register();
