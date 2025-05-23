import React, { useState } from 'react';
import axios from 'axios';

const TaskForm: React.FC<{ onTaskAdded: () => void }> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/tasks', {
      title,
      description,
      dueDate,
      priority,
      completed: false
    })
    .then(() => {
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Low');
      onTaskAdded(); // refresh task list
    })
    .catch(error => {
      console.error('Error creating task:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
