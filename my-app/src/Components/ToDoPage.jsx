import React from "react";
import { FaCheckCircle, FaUser,FaTasks,FaRegCalendarAlt, FaClock  } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiCalendar2Line, RiTeamLine  } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import "./TodoPage.css";

const TodoPage = () => {
  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <div className="todo-left">
          <div className="todo-header">
            <img src="https://pics.craiyon.com/2024-09-19/pTqdzlorS-uGf367PYXzSA.webp" alt="User Avatar" className="user-avatar" />
            <div className="user-info">
              <p className="greet">Hello,</p>           
              <div className="user-name">Joko Husein</div>
              <p className="task-progress">On Progress (12) <span className="view-more">View More</span></p>
            </div>
            <div className="header-icons">
              <RiCalendar2Line className="header-icon" />
              <BsBell className="header-icon" />
            </div>
          </div>
          <div className="task-progress-card">
            <div className="task-header">
              <div className="task-title">Design UI ToDo APP</div>
              <RiTeamLine  className="team-icon" />
            </div>
            <p className="task-date">Friday, 08 July 2022</p>
            <div className="line">__________________________________________</div>
            <div className="description">Description:</div>
            <p className="task-description">Design a simple home pages with clean layout and color based on the guidelines...</p>
            <div className="task-footer">
              <span className="task-teams">Teams:</span>
              <span className="task-progress">Progress:</span>
            </div>
            <span className="team-icons">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU" alt="Team Member" className="team-member" />
              <img src="https://cdn4.iconfinder.com/data/icons/professional-avatar-5/48/teacher_avatar_woman_women_profile_character_professions_2-512.png" alt="Team Member" className="team-member" />
              <img src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-3d-employee-video-chat-png-image_13340394.png" alt="Team Member" className="team-member" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBqBKkB60hEtGe0eS-K0FM1NSLesNcQwJNg&s" alt="Team Member" className="team-member" />
              <span className="progress-bar"><AiOutlineLoading3Quarters  className="progress-icon" /> 78%</span>
            </span>
          </div>
          <div className="completed-section">
            <div className="completed-header">
              <h3 className="completed-title">Completed</h3>
              <span className="view-more">View More</span>
            </div>
            <div className="task-content">
              <div className="task-header">
                <div className="task-name">Meeting with Client</div>
                <FaCheckCircle  className="task-check" />
              </div>
              <p className="task-description">Redesign motion graphic...</p>
              <div className="line">__________________________________________</div>
              <div className="task-footer">
                <span className="task-time">Today - 11:25 PM</span>
                <div className="task-team">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU" alt="Team Member" className="team-member" />
                  <img src="https://cdn4.iconfinder.com/data/icons/professional-avatar-5/48/teacher_avatar_woman_women_profile_character_professions_2-512.png" alt="Team Member" className="team-member" />
                </div>
              </div>
            </div>
          </div>
          <div className="task-content">
            <div className="task-header">
              <div className="task-name">Task Explorer NFT</div>
              <FaCheckCircle  className="task-check" />
            </div>
            <p className="task-description">Explore design mobile UI...</p>
            <div className="line">__________________________________________</div>
            <div className="task-footer">
              <span className="task-time">01 July - 10:30 AM</span>
              <div className="task-team">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBqBKkB60hEtGe0eS-K0FM1NSLesNcQwJNg&s" alt="Team Member" className="team-member" />
                <img src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-3d-employee-video-chat-png-image_13340394.png" alt="Team Member" className="team-member" />
              </div>
            </div>
          </div>
          <button className="create-task-button">+ Create New</button>
        </div>

        {/* Right Section */}
        <div className="todo-right">
          <div className="header-card">
            <div className="todo-header">
              <img src="https://pics.craiyon.com/2024-09-19/pTqdzlorS-uGf367PYXzSA.webp" alt="User Avatar" className="user-avatar" />
              <div className="user-info">
                <p className="greet">Hello,</p>           
                <div className="user-name">Joko Husein</div>
                <p className="task-progress">On Progress (12) <span className="view-more">View More</span></p>
              </div>
              <div className="header-icons">
                <RiCalendar2Line className="header-icon" />
                <BsBell className="header-icon" />
              </div>
            </div>
            <div className="task-progress-card1">
              <div className="task-header">
                <div className="task-title">Design UI ToDo APP</div>
                <RiTeamLine  className="team-icon" />
              </div>
              <p className="task-date">Friday, 08 July 2022</p>
            </div>
          </div>
        
          <div className="task-form">
            <h2 className="form-title">New Task ToDo</h2>
            <label className="form-label">Title Task</label>
            <input type="text" placeholder="Add Task Name.." className="task-input" />
            
            <label className="form-label">Category</label>
            <div className="category-section">
              <button className="category-button active"><FaUser /> Personal</button>
              <button className="category-button"><FaTasks /> Teams</button>
            </div>
            
            <label className="form-label">Description</label>
            <textarea placeholder="Add Descriptions..." className="task-textarea"></textarea>
            
            <div className="date-time-section">
              <div className="input-group">
                <label className="form-label">Date</label>
                <div className="input-icon">
                  <FaRegCalendarAlt className="input-icon-img" />
                  <input type="text" placeholder="dd/mm/yy" className="date-input" />
                </div>
              </div>
              <div className="input-group">
                <label className="form-label">Time</label>
                <div className="input-icon">
                  <FaClock className="input-icon-img" />
                  <input type="text" placeholder="hh:mm" className="time-input" />
                </div>
              </div>
            </div>
            
            <div className="form-buttons">
              <button className="cancel-button">Cancel</button>
              <button className="submit-task-button">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default TodoPage;