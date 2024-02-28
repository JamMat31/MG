import logo from './logo.svg';
import './App.css';
import Background from './pages/background'
import Navbar from './pages/nav';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename = '/'>
        <div className="app-container">
          <div className="content-container">
            
            <Routes>
              <Route exact path='/'> {<Background/>}
              <Route exact path='/' element={<Navbar />} />
              <Route exact path='/' element={<Homepage />} />  
              </Route>            
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
