import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img
          src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
          alt=""
        />
        <div className="profile_detail">
            <Avatar/>
            <h4>M S Prince</h4>
            <p>Front End Web Developer</p>
        </div>
        <div className="profile_stats">
            <span>Who Views your Profile</span>
            <span className="stat_number">
                1904
            </span>
        </div>
        <div className="profile_stats">
            <span>Connection <br /><b>Grow Your Network</b></span>
            <span className="stat_number">
                1904
            </span>
        </div>
      </div>
      <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>branding</p>
        <p className="hash"><span>#</span>marketink</p>
        <p className="hash"><span>#</span>web development</p>
        <p className="hash"><span>#</span>programming</p>
        <p className="hash"><span>#</span>react</p>
        <p className="hash"><span>#</span>html</p>
        <p className="hash"><span>#</span>css</p>
      </div>
    </div>
  );
}

export default Sidebar
