import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Root } from '../../pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Root />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;