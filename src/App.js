import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Card from "./Components/Card";
import CardToAddNewEmployer from "./Components/CardToAddNewEmployer";
import { connect } from "react-redux";
import {deleteEmployees} from './redux/actions'

function App(props) {
  return (
    <div className="App">
      <h1>Kiss ya'll</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          id="cards-employers"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {props.employees.map(card => {
            return <Card key={card.id} id={card.id} />;
          })}
        </div>
        <div id="info-to-app">
          {props.children}
          <div>
            <Button variant="danger" type="submit" onClick={() => props.deleteEmployees()}>
              Удалить
            </Button>
          </div>
        </div>
        <div>
          <CardToAddNewEmployer />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { employees } = state;
  return { employees };
}

export default connect(mapStateToProps, {deleteEmployees})(App);
