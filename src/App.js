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
import ListReports from "./components/reports/my-list-reports";
import UserList from "./components/user-management/user-list";
import ReportDetailPage from "./components/reports/report-detail";
import Example from "./pages/test";
import UserProfile from "./components/user-management/user-profile";
import UserReports from "./components/reports-management/reports-list";
import UserReportsManager from "./components/reports-management/reports-list-manager";
import UserListManager from "./components/user-management/user-list-manager";
import RequestsListManager from "./components/requests-management/requests-list-manager";
import RequestsList from "./components/requests-management/requests-list";
import UsersWorkingTime from "./components/workingtime-management/workingtime-list";
import UsersWorkingTimeManager from "./components/workingtime-management/workingtime-list-manager";
import ListCheckinManage from "./components/workingtime-management/list-checkin-checkout-manage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route exact path="/" element={<DashBoard />}></Route>
          <Route exact path="/checkin-checkout" element={<CheckInOut />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/password" element={<UpdatePassword />}></Route>
          <Route exact path="/requests/list" element={<ListRequests />}></Route>
          <Route exact path="/requests/manage/manager" element={<RequestsListManager />}></Route>
          <Route exact path="/requests/manage/admin" element={<RequestsList />}></Route>
          <Route exact path="/reports/list" element={<ListReports />}></Route>
          <Route exact path="/users/manage/admin" element={<UserList />}></Route>
          <Route exact path="/users/manage/manager" element={<UserListManager />}></Route>
          <Route exact path="/users/profile/:id" element={<UserProfile />}></Route>
          <Route exact path="/reports/manage/admin" element={<UserReports />}></Route>
          <Route exact path="/reports/manage/manager" element={<UserReportsManager />}></Route>
          <Route exact path="/reports/detail/:id" element={<ReportDetailPage />}></Route>
          <Route exact path="/workingtime-tracking/manage/admin" element={<UsersWorkingTime />}></Route>
          <Route exact path="/workingtime-tracking/manage/manager" element={<UsersWorkingTimeManager />}></Route>
          <Route exact path="/workingtime-tracking/manage/:id/:date" element={<ListCheckinManage />}></Route>
          <Route exact path="/test" element={<Example />}></Route>
        </Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
