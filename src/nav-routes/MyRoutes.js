import React from "react";
import { Routes, Route } from "react-router-dom";
import CompaniesList from "../companies/CompanyList";
import CompanyDetails from "../companies/CompanyDetail";
import JobsList from "../jobs/JobList";
import SignUpForm from "../forms/SignUpForm";
import LoginForm from "../forms/LoginForm";
import ProfileForm from "../forms/ProfileForm";
import Homepage from "../homepage/Homepage";
import PrivateRoute from "./PrivateRoute";

const MyRoutes = ({ login, signup, update }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/companies/*"
          element={<PrivateRoute element={<CompaniesList />} />}
        />
        <Route
          path="/companies/:handle"
          element={<PrivateRoute element={<CompanyDetails />} />}
        />
        <Route
          path="/jobs/*"
          element={<PrivateRoute element={<JobsList />} />}
        />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignUpForm signup={signup} />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfileForm update={update} />} />}
        />
      </Routes>
    </div>
  );
};

export default MyRoutes;
