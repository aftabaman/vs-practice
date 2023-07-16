import logo from './logo.svg';
import './App.css';
import './components/Card';
import Card from './components/Card';

import AccountLogin from './components/AccountLogin';
import AccountSignup from './components/AccountSignup';

import { BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom';
import Success from './components/Success';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>

        <Route path='/' element={<Card></Card>}> 
        
          <Route path='/' element={<AccountLogin/>}></Route>
          <Route path='/login' element={<AccountLogin/>}></Route>
          <Route path='/signup' element={<AccountSignup/>}></Route>
          
        </Route>
        <Route path='/success' element={<Success></Success>}> </Route>
        <Route path='*' element={<div>No match Found!!</div>}> </Route>
        
      </Routes>
      </Router>

    </div>
  );
}

export default App;
