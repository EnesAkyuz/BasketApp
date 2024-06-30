import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx"
import HomeTest from "./pages/HomeTest/Home.jsx"
import ListingsPage from './pages/listingsPage/ListingsPage.jsx';
import NotificationsPage from './pages/notificationsPage/notifications.jsx';
import Cookies from "universal-cookie"


function App() {

  const cookies = new Cookies(null, {path: "/"});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Snacks" element={<ListingsPage list="snacks" />} />
        <Route path="/Veggies" element={<ListingsPage list="veggies" />} />
        <Route path="/Meals" element={<ListingsPage list="meals" />} />
        <Route path="/Items" element={<ListingsPage list="items" />} />
        <Route path="/Desserts" element={<ListingsPage list="desserts" />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/test" element={<HomeTest />} />
      </Routes>
    </Router>
  )
}

export default App
