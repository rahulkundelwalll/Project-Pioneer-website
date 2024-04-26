import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Department from './Pages/Department';
import Pagination from './Pages/Pagination';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UploadProject from './Pages/UploadProject';
import StudentList from './Pages/StudentList';
import Preferences from './Pages/Preferences';
import ProjectList from './Pages/ProjectList';
import AllotedProject from './Pages/AllottedProject';
import Contact from './components/Contact';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/faculty/dashboard' element={<Dashboard1 />} />
          <Route path='/faculty/uploadProject' element={<UploadProject />} />
          <Route path='/faculty/studentList' element={<StudentList />} />
          <Route path='/student/projectList' element={<ProjectList />} />
          <Route path='/student/preferences' element={<Preferences />} />
          <Route path='/student/dashboard' element={<Dashboard2 />} />
          <Route path='/student/allottedProject' element={<AllotedProject />} />
          <Route path="/" element={<Hero />} />
          <Route path="/dept" element={<Department />} />
          <Route path="/project" element={<Pagination />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutPage/>} />
          {/* <Route>path="/register"<Route/> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
