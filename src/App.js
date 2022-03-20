import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import form1 from "./pages/form_1";
import form2 from "./pages/form_2";
import form3 from "./pages/form_3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={form1} />
        <Route path="/form2" exact component={form2} />
        <Route path="/form3" exact component={form3} />
      </Switch>
    </Router>
  );
}

export default App;
