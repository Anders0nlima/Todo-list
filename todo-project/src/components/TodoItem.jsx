import { useState } from 'react';
import './TodoItem.css'; // Importando o arquivo de estilos

function TodoItem({ todo, toggleTodo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      
      <div className="button-group">
        {isEditing ? (
          <button className="save" onClick={handleSaveClick}>Salvar</button>
        ) : (
          <button className="edit" onClick={handleEditClick}>Editar</button>
        )}
        
        <button className="complete" onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? 'Desmarcar' : 'Concluir'}
        </button>

        <button className="remove" onClick={() => removeTodo(todo.id)}>Remover</button>
      </div>
    </li>
  );
}

export default TodoItem;