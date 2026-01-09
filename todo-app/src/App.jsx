import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };

  const saveEdit = () => {
    setTodos(todos.map(todo =>
      todo.id === editingId ? { ...todo, text: editValue } : todo
    ));
    setEditingId(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div>
      <nav style={{ padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
        <a href="../../index.html" style={{ textDecoration: 'none', color: '#333' }}>← Kembali ke Portfolio</a>
      </nav>
      <h1>To-do App</h1>

      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tambah tugas baru..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Tambah</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {editingId === todo.id ? (
              <div style={{ display: 'flex', flex: 1, gap: '10px' }}>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button onClick={saveEdit}>Simpan</button>
                <button onClick={cancelEdit} className="delete-btn">Batal</button>
              </div>
            ) : (
              <>
                <span className="task-text">{todo.text}</span>
                <div className="task-buttons">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="complete-btn"
                  >
                    {todo.completed ? 'Belum' : 'Selesai'}
                  </button>
                  <button
                    onClick={() => startEdit(todo.id, todo.text)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-btn"
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>
          Belum ada tugas. Tambah tugas pertama Anda!
        </p>
      )}
    </div>
  );
}

export default App;