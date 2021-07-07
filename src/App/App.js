import { connect } from "react-redux";
import { useState } from "react";
import styles from "./App.module.scss";
import Header from "../Layout/Header/Header.Layout";
import Home from "../Pages/Home/Home.page";
import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router-dom";
import Shop from "../Pages/Shop/Shop.page";
import ShopLink from "../Pages/Shop/ShopLink";
import Sign from "../Pages/Sign/Sign";
import CheckOut from "../Pages/CkeckOut/CheckOut";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Switch>
        <Redirect exact from = "/" to ='/home' />
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/shop'>
            <ShopLink />
          </Route>
          <Route path='/sign'>
            <Sign />
          </Route>
          <Route path='/checkout'><CheckOut /></Route>
        </Switch>
      </main>
    </div>
  );
}
const MapStateToProps = (state) => {
  return state;
};

export default connect(MapStateToProps)(App);
