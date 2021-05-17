import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreatePost, DetailPost, Home, MyPosts } from "..";
import { Footer, Header } from "../../components";

const MainApp = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/my-post/create-post">
            <CreatePost />
          </Route>
          <Route path="/my-posts">
            <MyPosts />
          </Route>
          <Route path="/detail-post/:id">
            <DetailPost />
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