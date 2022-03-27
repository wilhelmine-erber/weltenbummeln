import React from 'react';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { HomepageContext } from '../../../context/context';

const DayPicker = (prop) => {


  const { startDate, setStartDate, endDate, setEndDate, setDateDiff } = React.useContext(HomepageContext);

  const selectionRange = {

    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };

  const changeDates = () => {
    setStartDate(selectionRange.startDate);
    setEndDate(selectionRange.endDate);
    const dateDiffLocal = selectionRange.endDate.getDate() - selectionRange.startDate.getDate();
    //console.log("dateDiff", dateDiffLocal)
    setDateDiff(dateDiffLocal)
  }

  const handleSelect = (ranges) => {

    selectionRange.startDate = ranges.selection.startDate;
    selectionRange.endDate = ranges.selection.endDate;
  }

  
  return (
    <div className="DayPicker">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    
      <div className="gast">
        <h5>Anzahl der Gäste</h5>
        <input
          min={0}
          defaultValue={2}
          type="number" />
        <PeopleIcon />
      </div>
      <Button className="check" onClick={() => {changeDates(); prop.handleClose();}}>Verfügbarkeit prüfen</Button>
    </div>
  )
};

export default DayPicker;