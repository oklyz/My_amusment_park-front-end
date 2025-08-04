import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import gamesList from './gamesList.json'
import Games from "./pages/Games"
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Games/>
      
    </>
  );
}

export default App;