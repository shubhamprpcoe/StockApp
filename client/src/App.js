import React from "react";
import "./App.css";
// import { Typography, Stack } from "@mui/material";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

// import Home from "./pages/home/Home";
import SignupMainBody from "./feature/loginSignin/signup/SignupMainBody";
import LoginMainBody from "./feature/loginSignin/login/LoginMainBody";
// import UserPanel from "./pages/userPanel/UserPanel";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Home /> */}
        <LoginMainBody />
        <SignupMainBody />
        {/* <UserPanel /> */}
      </div>
    </Provider>
  );
}

export default App;
