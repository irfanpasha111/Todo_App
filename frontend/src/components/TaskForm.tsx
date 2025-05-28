// src/components/TaskForm.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

interface TaskFormProps {
  onTaskAdded: () => void;
  onTaskUpdated: (updatedTask: Task) => void;
  cancelEdit: () => void;
  taskToEdit: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onTaskAdded,
  onTaskUpdated,
  cancelEdit,
  taskToEdit,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Low');
    }
  }, [taskToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Title is required');
      return;
    }

    const taskData = {
      title,
      description,
      dueDate,
      priority,
      completed: taskToEdit?.completed ?? false,
    };

    if (taskToEdit) {
      axios.put(`http://localhost:8080/api/tasks/${taskToEdit.id}`, taskData)
        .then(response => {
          onTaskUpdated(response.data);
          cancelEdit();
        })
        .catch(error => {
          console.error('Error updating task:', error);
        });
    } else {
      axios.post('http://localhost:8080/api/tasks', taskData)
        .then(() => {
          setTitle('');
          setDescription('');
          setDueDate('');
          setPriority('Low');
          onTaskAdded();
        })
        .catch(error => {
          console.error('Error adding task:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
      {taskToEdit && (
        <button type="button" onClick={cancelEdit}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default TaskForm;
