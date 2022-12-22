import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import SkillsPage from "./pages/skills";
import ContactPage from "./pages/contact";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/skills" element={<SkillsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </Router>
      
    );
  }
  
  export default App;