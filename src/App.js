import { useState } from 'react';
import uuid from 'react-uuid';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Form from './components/Form/Form';


// App component that renders the Header and Tasks components
function App() {

  //Sets the initial state of the tasks array
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: 'Walk the dog',
      done: true
    },
    {
      id: uuid(),
      description: 'Wash the car',
      done: false
    },
    {
      id: uuid(),
      description: 'Finish the lab',
      done: false
    }
  ]);

  // Removes all tasks from the list
  const handleClearTasks = () => {
    setTasks([]);
  }


  // Toggles the status of a task
  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
        }
        });
        setTasks(updatedTasks);
        }
        
        // Removes a task from the tasks array
        const handleTaskRemove = (id) => {
          const filteredTasks = tasks.filter((task) => task.id !== id);
          setTasks(filteredTasks);
          }
  // Add a new task to the tasks array
  const handleAddTask = (description, status) => {
    setTasks ([
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status
      }
    ]);
  }

  return (
    <>
      {/* render the Header component */}
      <Header />
      {/* render the Tasks component */}
      <Tasks 
      tasks={tasks}
      onStatusChange={handleStatusChange}
      onTaskRemove={handleTaskRemove}
      onClearTasks={handleClearTasks}
      />
      {/* render the Form component */}
      <Form 
      onAddTask={handleAddTask}
      />
    </>
  );
}

export default App;