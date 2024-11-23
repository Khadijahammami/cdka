import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupOne from "./components/SignUp_one";
import SignupForm from "./components/SignupForm";
import SignIn from "./components/SignIn";
import Garde from "./components/Garde";
import DirectorHome from "./components/DirectorHome";
import SignUpFormgereant from "./components/SignUpFormgereant";
import SignupFormclient from "./components/SignUpFormclient";
import GerantHome from "./components/GerantHome";
import ClientHome from "./components/ClientHome";
import Depot from "./components/Depot";
import Client from "./components/GererClient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Garde />} />
        <Route path="/signupgerat" element={<SignUpFormgereant />} />
        <Route path="/signupclient" element={<SignupFormclient />} />
        <Route path="/geranthome" element={<GerantHome />} />
        <Route path="/clienthome" element={<ClientHome />} />

        <Route path="/signup" element={<SignupOne />} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/directhome" element={<DirectorHome />} />
        <Route path="/depot" element={<Depot />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </Router>
  );
}

export default App;
