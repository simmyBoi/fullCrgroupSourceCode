import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
