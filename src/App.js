import Board from "./pages/Board"; 
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
      <Footer />
    </div>
  );
}

export default App;
