import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import './App.css';
import Home from "./components/Pages/Home";
import NavBar from "./components/Navbar";
import About from "./components/Pages/About/about";




function App(){
return(
<>
<Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/About" element={<About />} />
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} /> */} 
          </Routes>
        </div>
      </Router>


</>











);



}




export default App;