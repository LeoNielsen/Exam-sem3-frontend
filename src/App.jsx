import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import Header from "./components/Header";
import AdminSite from "./components/AdminSite";
import Unauthorized from "./components/Unauthorized";
import Edit from "./components/Edit";
import Create from "./components/Create";

export default function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header loggedIn={loggedIn} isAdmin={isAdmin} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} />} />

          <Route path="edit" element={<Edit />} />
          <Route path="create" element={<Create />} />

          <Route path="adminsite" element={<AdminSite isAdmin={isAdmin} />} />

          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
