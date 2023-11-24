import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </main>
    </Router>
  );
}

export default App;
