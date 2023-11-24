import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import Header from "./components/Header";
import DashboardScreen from "./screens/DashboardScreen";
import ProductListScreen from "./screens/ProductlistScreen";

function App() {
  return (
    <Router>
      <main>
      <Header />
        <Route path="/" component={HomeScreen} exact />
        
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardScreen}/>
        <Route path="/admin/productlist" component={ProductListScreen} />
      </main>
    </Router>
  );
}

export default App;
