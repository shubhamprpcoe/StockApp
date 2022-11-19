import React from "react";
import "./App.css";
// import { Typography, Stack } from "@mui/material";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import Home from "./pages/home/Home";
// import Login from "./feature/loginSignin/LoginMainBody";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        {/* <Login />  */}
      </div>
    </Provider>
  );
}

export default App;
