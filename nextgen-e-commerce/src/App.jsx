import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import NavBar from "./layout/HeaderLayout/NavBar";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <HomePage />
        </Router>
      </div>
    </>
  );
}

export default App;
