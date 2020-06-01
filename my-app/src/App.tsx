import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Fade from "@material-ui/core/Fade";
import Header from "../src/components/Editor/header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Fade key="fade1" in={true} timeout={1000}>
          <div>
            <Header />
          </div>
        </Fade>
      </Route>
    </BrowserRouter>
  );
}

export default App;
