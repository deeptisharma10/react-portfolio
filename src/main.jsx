import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/all.scss';
import './assets/styles/bootstrap.min.css';
import './assets/bootstrap.bundle.min.js';
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
