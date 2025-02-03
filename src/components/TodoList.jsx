import React, { useState } from 'react';

const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div>
      <h2>Todo List</h2>
      <p>Total: {tasks.length}, Terminées: {completedTasks}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} ({task.priority})
            <button onClick={() => toggleTask(index)}>{task.completed ? "✅" : "❌"}</button>
          </li>
        ))}
      </ul>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Nouvelle tâche" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

export default TodoList;
