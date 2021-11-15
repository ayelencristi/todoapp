import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Dashboard } from './pages';
import { AddTask } from "./pages/AddTask";
import { SignUp } from "./pages/SignUp";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
