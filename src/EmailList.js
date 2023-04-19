import React from 'react'
import './EmailList.css';
import EmailRow from './EmailRow';
import { Checkbox, IconButton } from '@mui/material';
// Import Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const EmailList = () => {
  return (
    <div className="email-list">
        <div className="email-list-settings">
            <div className="email-list-settings-left">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="email-list-settings-right">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>

        <div className="email-list-messages">
            <EmailRow
                sender="Future Paola"
                subject="Hey, self!"
                message="Don't work too hard :)" 
                time="10:00 PM"
            />
            <EmailRow
                sender="Lorem"
                subject="Ipsum"
                message="dolor sit amet, consectetur adipiscing elit" 
                time="09:59 PM"
            />
        </div>
    </div>
  )
}

export default EmailList