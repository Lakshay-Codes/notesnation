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
function App() {
  return (
    < >
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
