import React, { useState } from 'react';
import DayPicker from './DayPicker';
import { Button } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Popover from '@mui/material/Popover';



export default function SearchDate() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log("close");
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='calendar-search'>
      <Button 
        className='searchButton'
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}>
        <p>Wann möchtest du verreisen? </p>
        <DateRangeIcon className="daterangeicon" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DayPicker handleClose={handleClose} />
      </Popover>
    </div>
  );
}