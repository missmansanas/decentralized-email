import React from 'react';
import './Header.css';
import { Avatar, IconButton, Button } from '@mui/material';
// Import Icons
import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


function Header() {
  return (
    <div className="header">
        <div className="header-left">
          <IconButton>
              <MenuIcon/>
          </IconButton>
          <Button className="header-title" startIcon={<EmailOutlinedIcon/>}>Dmail</Button>
        </div>

        <div className="header-middle">
          <SearchIcon/>
          <input type="text" placeholder="Search mail" />
          <ArrowDropDownIcon className="header-inputCaret"/>
        </div>

        <div className="header-right">
          <IconButton>
            <HelpOutlineIcon/>
          </IconButton>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <Avatar/>
        </div>
    </div>
  )
}

export default Header