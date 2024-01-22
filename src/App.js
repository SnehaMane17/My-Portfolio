import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { About } from './components/Navbar/pages/About/About'
import { Project } from './components/Navbar/pages/Projects/Project'
import { Resume } from './components/Navbar/pages/Resume/Resume'
import { Home } from './components/Navbar/pages/Home/Home';
import  Footer  from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
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
