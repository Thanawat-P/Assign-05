"use client";

import { useState } from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    venue: "",
    date: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Booking Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-[400px]">
        <h2 className="text-2xl font-bold text-center">Venue Booking Form</h2>

        <TextField
          fullWidth
          variant="standard"
          label="Name-Lastname"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          variant="standard"
          label="Contact-Number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />

        <FormControl fullWidth variant="standard">
          <InputLabel id="venue-label">Select Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button type="submit" variant="contained" color="primary" fullWidth name="Book Venue">
          Book Venue
        </Button>
      </form>
    </div>
  );
}
