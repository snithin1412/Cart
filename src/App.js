import './App.css';
import Main from "./components/Main";
import Menu from "./components/Menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Menu /></Route>
          <Route path="/main"><Main /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
