import Home from './Component/Home'
import "./home.css"
import Project from './Component/Project';
import "./project.css"
import Service from "./Component/Service";
import "./service.css"


function App() {
  return(
    <div className="App">
      <div className='Content'>
       <Home />
       <Service />
       <Project />
      </div>
    
    </div>
  );
}
export default App
