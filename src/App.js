import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Menu2 from "./Pages/Menu2";
import AboutUs from "./Pages/AboutUs";
import Reservation from "./Pages/Reservation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu2" exact component={Menu2} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Reservation" exact component={Reservation} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;