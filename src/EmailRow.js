import React from 'react'
import './EmailRow.css'
import { useNavigate } from 'react-router-dom';
import { Checkbox, IconButton } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

const EmailRow = ({ id, sender, subject, message, time }) => {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate("/mail")} className="email-row">
      <div className="email-row-options">
        <Checkbox/>
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>

      <div className="email-row-sender">
        <h4>{sender}</h4>
      </div>

      <p className="email-row-message">
        <b>{subject}</b> <span className="email-row-preview"> {message}</span>
      </p>

      <div className="email-row-time">
        {time}
      </div>
    </div>
  )
}

export default EmailRow