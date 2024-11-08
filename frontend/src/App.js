import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import LanguageLearningHeader from './components/LanguageLearningHeader';
import LanguageCourses from './components/LanguageCourses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "" element={<LanguageLearningHeader/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/courses" element={<LanguageCourses/>}/>

      </Routes>
    </div>
  );
}

export default App;
