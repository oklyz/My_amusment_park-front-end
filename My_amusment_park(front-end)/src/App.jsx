import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Games from "./pages/Games"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Services from "./pages/Services";
import TicketForm from "./components/TicketForm";
import  Profile  from './pages/Profile';
import { CheckSession } from "./services/auth";
import { useEffect, useState } from "react";
import GameDetails from "./pages/GameDetails.";

const App=()=> {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <Header user={user} handleLogOut={handleLogOut}/>

      <Routes>
        <Route path="/sign-in" element={<SignIn setUser={setUser} user={user}/>}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-out"></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Games" element={<Games />}></Route>
        <Route path="/buy-tickets" element={<TicketForm/>}></Route>

        <Route path="Games/:id" element={<GameDetails/>}></Route>

        <Route path="/profile" element={<Profile user={user}/>}></Route>

      </Routes>

    </>
  );
}

export default App;