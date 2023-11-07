import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const myName = "Vladimir";

const info = (
  <div className="container">
    <span>Мое имя {myName}</span>
    <label security="true">Нажми на кнопку, получишь результат</label>
    <button tabIndex="0">CLICK ME BEACH</button>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
