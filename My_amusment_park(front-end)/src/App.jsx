import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Games from "./pages/Games"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Services from "./pages/Services";
import TicketForm from "./components/TicketForm";
import { CheckSession } from "./services/auth";
import { useEffect, useState } from "react";

function App() {
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
      </Routes>

    </>
  );
}

export default App;