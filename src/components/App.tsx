import '../styles/App.css';
import Home from "../pages/Home";
import AddPokemon from "../pages/AddPokemon";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p>Pokemon Manager</p>
      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddPokemon />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
