import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx"
import ListingsPage from './pages/listingsPage/ListingsPage.jsx';
import NotificationsPage from './pages/notificationsPage/notifications.jsx';


function App() {
  const [count, setCount] = useState(0)

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
      </Routes>
    </Router>
  )
}

export default App
