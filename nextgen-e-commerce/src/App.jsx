import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <Router>
          <Header/>
        </Router>
      </div>
    </>
  );
}

export default App;
