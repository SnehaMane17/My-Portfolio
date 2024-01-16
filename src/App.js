import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { About } from './components/Navbar/pages/About'
import { Project } from './components/Navbar/pages/Project'
import { Resume } from './components/Navbar/pages/Resume'
import { Home } from './components/Navbar/pages/Home';
import  Footer  from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/home' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/project' element = {<Project/>} />
      <Route path='/resume' element = {<Resume/>} /> 
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
