import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        
       <Nav/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/ContactUs' element={<ContactUs/>}></Route>
          <Route path='*' element={<div>No page Found!!!</div>}></Route>
        </Routes>
    </div>
  );
}

export default App;
