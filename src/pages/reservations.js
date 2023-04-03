import React from 'react';
import '../App'
import ReservationForm from '../Components/BookingForm';
import Footer from '../../src/Components/Footer'
import Navbar from '../Navbar';

import { useReducer } from "react";
import { fetchAPI } from "../bookingsAPI";
export default function Reservations() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Navbar/>
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
      <Footer/>
    </>
  );
}