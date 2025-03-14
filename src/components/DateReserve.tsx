"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface DateReserveProps {
  onDateChange: (date: Date | null) => void;
}

const DateReserve: React.FC<DateReserveProps> = ({ onDateChange }) => {
  const handleChange = (date: Dayjs | null) => {
    onDateChange(date ? date.toDate() : null); // Convert Dayjs to JS Date
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className="bg-white" onChange={handleChange} />
    </LocalizationProvider>
  );
};

export default DateReserve;
