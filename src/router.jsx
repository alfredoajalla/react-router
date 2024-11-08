import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Contact from "./routes/Contact";
import App from "./App";

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/contact', element: <Contact /> },
]);

export default router;