import React from "react";
import "./App.css";
import CardToAddNewEmployer from "./Components/CardToAddNewEmployer";
import { connect } from "react-redux";
import CardsList from "./Components/CardsList";

function App(props) {
  return (
    <div className="App">
      <h1>Kiss ya'll</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <CardsList />
        <div id="info-to-app">
          {props.children}
          
        </div>
        <div>
          <CardToAddNewEmployer />
        </div>
      </div>
    </div>
  );
}

export default connect(null)(
  App
);
