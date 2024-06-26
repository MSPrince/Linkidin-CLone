import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
