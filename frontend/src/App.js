import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
