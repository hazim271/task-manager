import React from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import Footer from "./Footer";
import '../styles/style.css';


const TaskManager = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <TaskList />
      </main>
      <Footer />
    </div>
  );
};

export default TaskManager;