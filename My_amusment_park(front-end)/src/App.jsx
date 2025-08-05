import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Games from "./pages/Games"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Services from "./pages/Services";
import TicketForm from "./components/TicketForm";
function App() {
  return (
    <>
      <Header />
    
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
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