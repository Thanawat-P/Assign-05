"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateReserve = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className="bg-white" />
    </LocalizationProvider>
  );
};

export default DateReserve;
