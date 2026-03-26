import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './pages/About';
import  Board  from './pages/Board';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
              </header>
              <Navbar/>
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;