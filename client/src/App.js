import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <main>
      <Route exact path="/register" element={<Register />} />
      </main>

      <div>Home</div>
    </Router>
  );
}

export default App;
