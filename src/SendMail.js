import React from 'react'
import './SendMail.css';
import { Button } from '@mui/material';
// Import Icons
import CloseIcon from '@mui/icons-material/Close';

const SendMail = () => {
  return (
    <div className="send-mail">
        <div className="send-mail-header">
            <h3>New Message</h3>
            <CloseIcon fontSize="small"/>
        </div>

        <form>
            <input
                name="to"
                type="text"
                placeholder="Recipient Address"
            />
            <input
                name="subject"
                type="text"
                placeholder="Subject"
            />
            <input
                name="to"
                type="text"
                placeholder="Message"
            />
        </form>

        <Button className="send-mail-button">Send</Button>
    </div>
  )
}

export default SendMail