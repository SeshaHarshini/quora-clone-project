import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import "./css/Quorabox.css";
function Quorabox() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
        <div className="quoraBox__info">
            <Avatar src = {user?.photo} />
        </div>
        <div className="quoraBox__quora">
            <h4 style={{color: "black"}}>What is your question?</h4>
        </div>
    </div>
  )
}

export default Quorabox;