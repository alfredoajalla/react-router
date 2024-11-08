import './App.css'
import Navbar from './components/Navbar'
import { todos } from './data.json'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1>
        App with React Router
      </h1>
      <ul>
        {todos.map(item => <li key={item.id}><Link to={item.slug}>{item.todo}</Link></li>)}
      </ul>
    </>
  )
}

export default App
