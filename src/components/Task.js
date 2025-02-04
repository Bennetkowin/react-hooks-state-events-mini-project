import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <div className="task-details">
        <span className="task-text">{task.text}</span>
        <span className="task-category">{task.category}</span>
      </div>
      <button className="delete" onClick={() => onDeleteTask(task.text)}>
        X
      </button>
    </div>
  );
}

export default Task;
