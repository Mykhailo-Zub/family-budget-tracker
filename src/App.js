import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-day">
          <div className="main-wrapper">
            <PrivateRoute />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
