import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateBlog, DetailBlog, Home } from "..";
import { Footer, Header } from "../../components";

const MainApp = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/detail-blog">
            <DetailBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  )
}

export default MainApp;