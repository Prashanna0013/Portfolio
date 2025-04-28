import {HashRouter as Router, Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Resume from './pages/Resume.js';
import Skills from './pages/Skills.js';
import Projects from './pages/Projects.js';
import Achievements from './pages/Achievements.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/achieve' element={<Achievements/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
