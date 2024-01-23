import React, {useState } from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // edit variables 
  const [editId, setEditId] = useState('');
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [edited, setEdited] = useState('');

  // handle todo
  const handleTodo = () => {
    const new_todo = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
    };

    setTodos((todo) => [...todo, new_todo]);

    setNewTodo("");
  };

  // delete
  const handleDelete = (id) => {
    const new_todo = todos.filter((todo) => todo.id !== id);
    setTodos(new_todo);
  };

  // confirm editing
  const confirmEditing = (id) =>{
    setEditId(id)
    setConfirmEdit(true);
  }

  // handle Editing 
  const handleEditing = () =>{
    todos.map(todo => {
      if (todo.id == editId){
        todo.value = edited
      }
      return todo
    })
    setEdited('');
    setConfirmEdit(false);
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        placeholder="enter a Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={() => handleTodo()}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            👉 {todo.value}
            <button onClick={() => handleDelete(todo.id)}>❌</button>
            <button onClick={() => confirmEditing(todo.id)}>✍️</button>
          </li>
        ))}
      </ul>
      {
        confirmEdit && 
        <div>
            <input placeholder="Enter the editing"  value={edited} onChange={e => setEdited(e.target.value)} />
            <button onClick={handleEditing}>Edit</button>
        </div>
      }
    </div>
  );
};

export default App;
