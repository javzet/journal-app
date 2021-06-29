import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div className="auth__main">
        <div className="auth__box-container">
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/" component={JournalScreen}></Route>
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
