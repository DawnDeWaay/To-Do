import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer.jsx";
import Card from "./Components/Card.jsx";
import AddNew from "./Components/AddNew.jsx";
import "./App.scss";

function App() {
  const [tasks, setTasks] = useState(() => {
    const localStorageValue = localStorage.getItem("stateKey");
    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    }
    return [
      { id: 0, text: "Press + to create a task", checked: false, color: 1 },
    ];
  });

  function Item(id, text, checked, color) {
    this.id = id;
    this.text = text;
    this.checked = checked;
    this.color = color;
  }

  const addTask = (text, color) => {
    const newTaskId = Math.random().toString(36).substring(2, 14);
    const newTask = new Item(newTaskId, text, false, color);
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("stateKey", JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task?") === true) {
      setTasks((prevTasks) => {
        const filteredTasks = prevTasks.filter((task) => task.id !== id);
        localStorage.setItem("stateKey", JSON.stringify(filteredTasks));
        return filteredTasks;
      });
    }
  };

  const toggleChecked = (item) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === item.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("stateKey", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <a href="/">
        <motion.h2 className="logo">Tasks</motion.h2>
      </a>
      <AddNew addTask={addTask} />
      <div className="container">
        <div className="hero">
          <h1>Time to Get Something Done</h1>
        </div>
        <AnimatePresence>
          {tasks.some((obj) => obj.checked === false) ? (
            tasks
              .filter((obj) => obj.checked === false)
              .map((task, index) => (
                <Card
                  key={task.id}
                  task={task}
                  index={index}
                  deleteTask={deleteTask}
                  toggleChecked={toggleChecked}
                />
              ))
          ) : (
            <motion.h2
              className="all-done"
              key={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              All done! 🎉
            </motion.h2>
          )}
          <motion.div className="divider" layout />
          {tasks.filter((obj) => obj.checked === true).length !== 0
            ? tasks
                .filter((obj) => obj.checked === true)
                .map((task, index) => (
                  <Card
                    key={task.id}
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    toggleChecked={toggleChecked}
                  />
                ))
            : ""}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;
