import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./containers/Home";
import Errour404 from "./Errour/Errour404";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route component={Errour404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
