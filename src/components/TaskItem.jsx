import React from "react";
import { FaCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa";
import '../styles/style.css';


const statusIcons = {
  Pending: <FaTimesCircle className="pending-icon" />,
  "In Progress": <FaSpinner className="progress-icon" />,
  Completed: <FaCheckCircle className="completed-icon" />,
};

const TaskItem = ({ task }) => {
  return (
    <div className="task-card">
      <span className="task-title">{task.title}</span>
      <span className={`task-status ${task.status.toLowerCase()}`}>

        {statusIcons[task.status]} {task.status}
      </span>
    </div>
  );
};

export default TaskItem;