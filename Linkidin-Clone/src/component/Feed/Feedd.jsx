import { Avatar } from '@mui/material';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from 'react'
import './feed.css'
import Post from '../post/Post';

function Feedd() {
  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
          <Avatar src="https://media.licdn.com/dms/image/D4E03AQEaYWwGrAv2Gw/profile-displayphoto-shrink_400_400/0/1695401174197?e=1721260800&v=beta&t=RBEAfaiLjPYVS5RsnQQsWn_vuefpTMBtYtLVJ9dDC7Q" />
          <form action="">
            <input type="text" placeholder="start a Post" />
            <input type="submit" />
          </form>
        </div>
        <div className="feed_options">
          <div className="option">
            <AddPhotoAlternateIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <CalendarMonthIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>


      <Post name="M S Prince" description="Full Stack Web Developer" message="aapka nam M S pri ce hai aapne kabhi pyar kiya" photoURL="https://media.licdn.com/dms/image/D4E03AQEaYWwGrAv2Gw/profile-displayphoto-shrink_400_400/0/1695401174197?e=1721260800&v=beta&t=RBEAfaiLjPYVS5RsnQQsWn_vuefpTMBtYtLVJ9dDC7Q"/>
      
    </div>
  );
}

export default Feedd
