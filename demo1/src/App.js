
import './App.css';
import Navbar from './components/Navbar.js';
import Btn1 from './components/Btn2.js';
import Form from './components/Form.js';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar navTitle = "TextUtils" searchBtn = "Search"/>
      <Routes>
        
        
        <Route exact path='/' element={<Form formHeading = "TextUtil Form" textLabel = "Enter your text here "/>}>

          </Route>
        <Route exact path='/About' element={<About/>}>
        
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
