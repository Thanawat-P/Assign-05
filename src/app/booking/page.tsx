"use client";

import { useState } from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    venue: "",
    date: null as Date | null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormData((prev) => ({
      ...prev,
      venue: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Booking Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-[400px]"
      >
        <h2 className="text-2xl font-bold text-center">Venue Booking Form</h2>

        <TextField
          fullWidth
          variant="standard"
          label="Name-Lastname"
          name="name"
          value={formData.name}
          onChange={handleInputChange} // Fixed input handling
        />

        <TextField
          fullWidth
          variant="standard"
          label="Contact-Number"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange} // Fixed input handling
        />

        <FormControl fullWidth variant="standard">
          <InputLabel id="venue-label">Select Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleSelectChange} // Fixed Select handling with correct event type
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve/>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Book Venue
        </Button>
      </form>
    </div>
  );
}
