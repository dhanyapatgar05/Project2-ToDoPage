import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiCalendar2Line, RiTeamLine  } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import "./TodoPage.css";

const TodoPage = () => {
  return (
    <div className="todo-container">
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
      </div>
    </div>
  );
};

export default TodoPage;