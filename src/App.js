import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { Box, Typography } from "@material-ui/core";
import "./styles.css";
import fliqaabout from "./assests/fliqaabout.png";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Box mb={2}>
              <Navbar />
            </Box>

            <Carousel />

            <img src={fliqaabout} alt="about" />
            <Link to="/logo">Go to Logo</Link>
          </Route>

          <Route exact path="/logo">
            <Logo btn={true} />
            <Navbar footer={true} />
            <Link to="/">Back to Home</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
