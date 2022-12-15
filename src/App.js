import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      </Router>
      
    );
  }
  
  export default App;