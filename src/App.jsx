import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
function App() {
  return (
    <BrowserRouter>
      <Route exact component={Header} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
      </Switch>
      <Route component={Footer} />
    </BrowserRouter>
  );
}

export default App;
