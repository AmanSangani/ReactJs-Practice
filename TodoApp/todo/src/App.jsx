// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './context';
import { TodoForm, TodoItem } from './components';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [...prev, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodo((prev) =>
      prev.map((eachTodo) => (eachTodo.id === id ? updatedTodo : eachTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData("index");
    const newTodos = [...todo];
    const [removedTodo] = newTodos.splice(oldIndex, 1);
    newTodos.splice(newIndex, 0, removedTodo);
    setTodo(newTodos);
  };

  return (
    <TodoProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
          <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div>
            {todo.map((eachTodo, index) => (
              <TodoItem
                key={eachTodo.id}
                todo={eachTodo}
                index={index}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
              />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
