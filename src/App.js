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
function App() {
  return (
    < >
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="Jai mata di"/>
        <div className="container">
         <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/about' element={<About />} />
         </Routes>
        </div>
       </Router>
    </NoteState>
    </>
  );
}

export default App;
