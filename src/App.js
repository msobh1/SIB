import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Admin from './pages/admin';
import Banker from './pages/banker';
import User from './pages/user';
import Services from './pages/services';
import Account from './pages/account';
import CustomerSupport from './pages/customerSupport';
import PersonalInfo from './pages/personalinfo';
import News from './pages/news';
import PointsRewards from './pages/pointsRewards';
import Certificate from './pages/certificate';
import Loan from './pages/loan';
import CreditCard from "./pages/creditcard"

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
          <Route path="/services" element={<Services />} />
          <Route path="/account" element={<Account />} />
          <Route path="/customerSupport" element={<CustomerSupport />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/news" element={<News />} />
          <Route path="/pointsRewards" element={<PointsRewards />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/creditcard" element={<CreditCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
