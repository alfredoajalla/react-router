import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router-dom";
import Dashboard from './routes/Dashboard.jsx';
import Contact from './routes/Contact.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/contact', element: <Contact /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

