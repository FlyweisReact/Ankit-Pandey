import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyContextProvider } from "./Homepage/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    
  </MyContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

