import { useParams } from 'react-router-dom';
import { todos as items } from '../data.json';

function TodoItem() {
  const { slug } = useParams();
  const item = items.find(item => item.slug === slug);
  return (
    <div>
      <h1>TodoItem</h1>
      <p>{item.id}</p>
      <p>{item.todo}</p>
      <p>{item.slug}</p>
    </div>
  )
}

export default TodoItem