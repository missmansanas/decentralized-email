import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { IconButton, Button } from '@mui/material';
// Import Icons
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
  return (
    <div className="sidebar">
        <Button className="sidebar-compose" startIcon={<CreateOutlinedIcon fontSize="large"/>}>Compose</Button>

        <SidebarOption 
            Icon={InboxIcon}
            title="Inbox"
            number={20}
            selected="true" />
        <SidebarOption
            Icon={StarBorderOutlinedIcon}
            title="Starred"
            number={5} />
        <SidebarOption
            Icon={SendOutlinedIcon}
            title="Sent"
            number={5} />

        <div className="sidebar-footer">
            <div className="sidebar-footerIcons">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar