import React from "react";
import { FaUserCircle, FaUsers, FaBell, FaCalendarAlt, FaCircle } from "react-icons/fa";
import "./TodoPage.css";

const TodoPage = () => {
  return (
    <div className="todo-container">
      <div className="todo-left">
        <div className="todo-header">
        <img src="https://pics.craiyon.com/2024-09-19/pTqdzlorS-uGf367PYXzSA.webp" alt="User Avatar" className="user-avatar" />
          <div className="user-info">
            <p className="word">Hello,</p>
            <h2 className="user-name2">Joko Husein</h2>
            
            <p className="task-progress">On Progress (12) <span className="view-more">View More</span></p>
          </div>
          <div className="header-icons">
            <button className="calendar-button"><FaCalendarAlt /></button>
            <button className="notification-button"><FaBell /></button>
          </div>
        </div>

        <div className="task-progress-card">
          <div className="task-header">
            <h3 className="task-title">Design UI ToDo APP</h3>
            <FaUsers className="team-icon" />
          </div>
          <p className="task-date">Friday, 08 July 2022</p>
          <p className="task-description">Design a simple home pages with clean layout and color based on the guidelines...</p>
          <div className="task-footer">
            <span className="task-teams">Teams:</span>
            <span className="team-icons">
              <FaUserCircle className="team-member" />
              <FaUserCircle className="team-member" />
              <FaUserCircle className="team-member" />
              <FaUserCircle className="team-member" />
            </span>
            <span className="task-progress">Progress:</span>
            <span className="progress-bar"><FaCircle className="progress-icon" /> 78%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
