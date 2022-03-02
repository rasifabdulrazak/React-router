import logo from './logo.svg';
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import {useState} from 'react'
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom'

function App() {
  const [state, setState] = useState('')
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={()=>navigate.push('/about')}>About</button>
      <button onClick={()=>navigate.push('/profile')}>Profile</button>
    
        <Route element={About} path='/about' /> 
        <Route element={Profile} path='/profile' />
 
    </div>
  );
}

export default App;
