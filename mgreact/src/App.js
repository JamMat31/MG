import logo from './logo.svg';
import './App.css';
import Navbar from './pages/nav';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      {<Navbar />}
      {<Homepage />}
      
    </div>
  );
}

export default App;
