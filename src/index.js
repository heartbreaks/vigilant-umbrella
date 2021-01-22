import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App>
      <p>
        Для того что бы поля стали активными необходимо выбрать сотрудника в
        списке слева или нажать на кнопку добавить, если вы уже выбрали
        сотрудника в списке и изменили что надо но необходимо теперь добавить,
        нажмите кнопку добавить и все будет классно
      </p>
    </App>
  </Provider>,
  document.getElementById("root")
);
