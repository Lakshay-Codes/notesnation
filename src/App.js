import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import './App.css';
import NoteState from "./context/notes/NoteState.js";
import Alert from "./components/Alert.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
function App() {
  return (
    < >
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="Jai mata di do react from 11:30 to 1:30 daily"/>
        <div className="container">
         <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/about' element={<About />} />
           <Route exact path='/login' element={<Login />} />
           <Route exact path='/signup' element={<SignUp />} />
         </Routes>
        </div>
       </Router>
    </NoteState>
    </>
  );
}

export default App;
