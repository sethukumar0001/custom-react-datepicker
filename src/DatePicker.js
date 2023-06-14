import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="datepicker_container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="react-date-picker__inputGroup__input"
        dateFormat="d MMM yyyy"
        showYearDropdown
        showMonthDropdown
      />
    </div>
  );
};
