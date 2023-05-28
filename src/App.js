import './App.css';
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

const App = () => {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/checkout" element={ <Checkout />}/>
                  <Route path="/" element={ <Home />}/>
                  <Route path="/login" element={<Login />}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
