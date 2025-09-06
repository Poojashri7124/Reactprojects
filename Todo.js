import React, { useState } from 'react';

import './Todo.css';
function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (task.trim() === '') return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }
    setTask('');
  };

  const handleEdit = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
    if (editIndex === index) {
      setTask('');
      setEditIndex(null);
    }
  };

  return (
    <div className="todo-container">
      <h1>TO-DO LIST</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
