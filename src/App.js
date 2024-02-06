import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Employee from './components/employee/Employee';
import Donor from './components/donor/Donor';
import Recipient from './components/recipient/Recipient';
import NewEmployee from './components/employee/forms/new_employee/NewEmployee';
import ExistingEmployee from './components/employee/forms/existing_employee/ExistingEmployee';
import NewDonor from './components/donor/NewDonor';
import NewRecipient from './components/recipient/NewRecipient';
import DonorBlood from './components/donor_blood/DonorBlood';
import MainScreen from './components/main_screen/MainScreen';
import Profile from './components/profile/Profile';
import RecipientBlood from './components/recipient_blood/RecipientBlood';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/recipient" element={<Recipient />} />
          <Route path="/main-screen" element={<MainScreen />} />
          <Route path="/new-employee" element={<NewEmployee />} />
          <Route path="/existing-employee" element={<ExistingEmployee />} />
          <Route path="/new-donor" element={<NewDonor />} />
          <Route path="/new-recipient" element={<NewRecipient />} />
          <Route path="/donor-blood" element={<DonorBlood />} />
          <Route path="/recipient-blood" element={<RecipientBlood />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
