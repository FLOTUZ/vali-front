import "./App.css";

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const formulario = lazy(() => import("./components/Formulario"));
const home = lazy(() => import("./components/Home"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div> loading...</div>}>
        <Switch>
          <Route exact path="/" component={formulario}></Route>
          <Route exact path="/home" component={home}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
