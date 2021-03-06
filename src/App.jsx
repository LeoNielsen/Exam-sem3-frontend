import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import Header from "./components/Header";
import AdminSite from "./components/AdminSite";
import Unauthorized from "./components/Unauthorized";
import Edit from "./components/EditRace";
import Create from "./components/Create";
import Races from "./components/Races";
import Cars from "./components/Cars";
import MyRaces from "./components/MyRaces";
import EditCar from "./components/EditCar";
import Drivers from "./components/Drivers";
import EditDriver from "./components/EditDriver";

export default function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header loggedIn={loggedIn} isAdmin={isAdmin} setLoggedIn={setLoggedIn} isUser={isUser} setIsuser={setIsUser} setIsAdmin={setIsAdmin}/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} setIsUser={setIsUser} />} />

          <Route path="edit/:id" element={<Edit />} />
          <Route path="editcar/:id" element={<EditCar />} />
          <Route path="editdriver/:id" element={<EditDriver />} />
          <Route path="create" element={<Create />} />

          <Route path="drivers" element={<Drivers isAdmin={isAdmin} />} />
          <Route path="races" element={<Races isAdmin={isAdmin} />} />
          <Route path="cars" element={<Cars isAdmin={isAdmin} />} />
          <Route path="myraces" element={<MyRaces isAdmin={isAdmin} />} />

          <Route path="adminsite" element={<AdminSite isAdmin={isAdmin} />} />

          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
