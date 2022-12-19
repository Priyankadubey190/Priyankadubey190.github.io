import {Route,Routes} from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Projects from "../components/Projects";

export const AllRoute = ()=>{

    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    )
}