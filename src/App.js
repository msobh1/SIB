import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Admin from './pages/admin';
import Banker from './pages/banker';
import User from './pages/user';
import Home from './pages/home';

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/banker" element={<Banker />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
