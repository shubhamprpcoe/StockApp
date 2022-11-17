import React from "react";
import "./App.css";
import { Typography, Stack } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import Home from "./pages/home/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
