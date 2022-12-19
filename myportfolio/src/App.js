import './App.css';
import Home from './components/Home';
import {Navbar} from './components/Navbar';
//import Projects from './components/Projects';
// import { AllRoute } from './pages/AllRoute';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      
      
      {/* <AllRoute /> */}
    </div>
  );
}

export default App;
