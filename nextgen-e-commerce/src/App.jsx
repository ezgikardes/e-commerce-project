import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <Router>
          <HomePage />
        </Router>
      </div>
    </>
  );
}

export default App;
