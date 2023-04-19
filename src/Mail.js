import React from 'react'
import './Mail.css';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// Import Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import ReplyIcon from '@mui/icons-material/Reply';

const Mail = () => {
    const navigate = useNavigate();

  return (
    <div className="mail">
        <div className="mail-tools">
            <div className="mail-tools-left">
                <IconButton onClick={() => navigate("/")} >
                    <ArrowBackIcon fontSize="small"/>
                </IconButton>
                <IconButton>
                    <ArchiveOutlinedIcon fontSize="small"/>
                </IconButton>
                <IconButton>
                    <DeleteOutlineOutlinedIcon fontSize="small"/>
                </IconButton>
                <IconButton>
                    <EmailOutlinedIcon fontSize="small"/>
                </IconButton>
            </div>

            <div className="mail-tools-right">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>

        <div className="mail-body">
            <h2 className="mail-subject">Hey, self!</h2>
            <div className="mail-body-info">
                <div className="mail-info-left">
                    0xA99...1234
                </div>
                <div className="mail-info-right">
                    Apr 18, 2023, 10:00 PM
                    <IconButton>
                        <StarBorderOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <ReplyIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mail-body-content">
                <p>Don't work too hard :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, quas possimus praesentium debitis nihil delectus ullam molestiae voluptates rem ad, similique hic beatae tempora incidunt eveniet rerum? Quas cupiditate suscipit vero unde?</p>
            </div>
        </div>
    </div>
  )
}

export default Mail