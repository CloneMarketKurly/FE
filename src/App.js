import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import { useSelector } from "react-redux";
import { getCookie } from "./shared/Cookie";
import { actionCreators } from "./redux/modules/user";
import { useDispatch } from "react-redux";
import "./App.css";

import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import ReviewWrite from "./pages/ReviewWrite";
import ReviewDetail from "./pages/ReviewDetail";
import Cart from "./pages/Cart";

import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/detail/:itemId" exact component={Detail} />
        <Route path="/reviewDetail" exact component={ReviewDetail} />
        <Route path="/reviewWrite/:itemId" exact component={ReviewWrite} />
        <Route
          path="/reviewWrite/:itemId/:commentId"
          exact
          component={ReviewWrite}
        />
        <Route path="/cart/:userId" exact component={Cart} />
        <Footer />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
