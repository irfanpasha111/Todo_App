import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = () => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = (id: number) => {
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then(() => {
        fetchTasks();
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  const toggleCompleted = (task: Task) => {
    axios.put(`http://localhost:8080/api/tasks/${task.id}`, {
      ...task,
      completed: !task.completed
    })
      .then(() => {
        fetchTasks();
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  };

  return (
    <div>
      <h1>My ToDos</h1>
      <TaskForm onTaskAdded={fetchTasks} />

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '1rem' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task)}
              style={{ marginRight: '8px' }}
            />
            <strong style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </strong> - {task.description} - Due: {task.dueDate} - Priority: {task.priority}
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: '12px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
