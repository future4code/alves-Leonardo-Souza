import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage"
import ApplicationFormPage from "../Pages/ApplicationFormPage"
import CreateTripPage from "../Pages/CreateTripPage"
import HomePage from "../Pages/HomePage"
import ListTripPage from "../Pages/ListTripsPage"
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"
import styled from 'styled-components';

const RouterDiv = styled.div`
  display: flex;
  /* border: solid 1px red; */
  position: relative;  
  height: 100vh;
`


function RouterLeonardo() {
  return (
    <RouterDiv>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="create" element={<CreateTripPage />} />
          <Route path="trips" element={<ListTripPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="details" element={<TripDetailsPage />} />
          <Route path="application" element={<ApplicationFormPage />} />
        </Routes>
      </BrowserRouter>
    </RouterDiv>
  )
}

export default RouterLeonardo

