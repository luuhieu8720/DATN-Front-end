import { BrowserRouter, Route, Routes } from "react-router-dom";
import React  from 'react';
import './App.css';
import Login from "./components/login/login";
import Homepage from "./pages/homepage";
import CheckInOut from "./pages/checkin-checkout-page";
import Profile from "./components/profile/profile";
import UpdatePassword from "./components/profile/update-password";
import ListRequests from "./components/requests/list-requests";
import DashBoard from "./components/home/dashboard";
import ListReports from "./components/reports/list-reports";
import UserList from "./components/user-management/user-list";
import ReportDetailPage from "./components/reports/report-detail";
import Example from "./pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route exact path="/" element={<DashBoard />}></Route>
          <Route exact path="/checkin-checkout" element={<CheckInOut />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/password" element={<UpdatePassword />}></Route>
          <Route exact path="/list-requests" element={<ListRequests />}></Route>
          <Route exact path="/list-reports" element={<ListReports />}></Route>
          <Route exact path="/list-users" element={<UserList />}></Route>
          <Route exact path="/report-detail/:id" element={<ReportDetailPage />}></Route>
          <Route exact path="/test" element={<Example />}></Route>
        </Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
