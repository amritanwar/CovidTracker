import './App.css';

import Cards from "./component/Cards";
import Bars from "./component/Bars";
import Lines from "./component/Lines";
function App() {
  const x = "🔴";
  return (
    <div className="App">
     <h1> {x} Live</h1>
    <br/>
      <h1 className='element'> Covid Tracker of India</h1>
     <Cards /> 
     <Bars />
     <Lines />
    </div>
  );
}

export default App;
