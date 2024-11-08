import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Contact from "./routes/Contact";
import App from "./App";
import TodoItem from './routes/TodoItem';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/contact', element: <Contact /> },
  { path: ':slug', element: <TodoItem /> },
]);

export default router;