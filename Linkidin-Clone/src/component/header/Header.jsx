import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './header.css'
import Headeroptions from "../headeroptions/Headeroptions";
import { Home } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png"
            alt=""
          />
        </div>
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <Headeroptions Icon={Home} title="Home" />
        <Headeroptions Icon={PeopleAltIcon} title="My Network" />
        <Headeroptions Icon={WorkIcon} title="Jobs" />
        <Headeroptions Icon={MessageIcon} title="Messaging" />
        <Headeroptions Icon={NotificationsIcon} title="Notification" />
        <Headeroptions avatar={Avatar} title="M S Prince" />
      </div>
    </div>
  );
}

export default Header;
