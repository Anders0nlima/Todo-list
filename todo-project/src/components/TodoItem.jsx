function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
      <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
        <button onClick={() => removeTodo(todo.id)}>Remover</button>
      </li>
    );
  }
  
  export default TodoItem;