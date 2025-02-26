import React from "react";
import TaskItem from "./TaskItem";
import '../styles/style.css';


const tasks = [
  { id: 1, title: "Design UI for Task Manager", status: "Pending" },
  { id: 2, title: "Refactor code structure", status: "In Progress" },
  { id: 3, title: "Review PR for UI update", status: "Completed" },
];

const TaskList = () => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;