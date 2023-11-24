import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/register" element={Register} />
      </main>
    </Router>
  );
}

export default App;
