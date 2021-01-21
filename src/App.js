import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import LeftPanels from "./modules/leftPanels/LeftPanels";
import TopPanels from "./modules/topPanels/TopPanels";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-day">
          <div className="main-wrapper">
            <LeftPanels />
            <TopPanels />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
