import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import useStyles from "./SignUpTheme";

export default function signUp() {
  const classes = useStyles();
  const [helperText, SethelperText] = useState("");

  const [signUpBody, SetSignUpBody] = useState({
    name: "", email: "", password: "", cofirmationPassword: "",
  });

  // creating and messaging data to sending backx`
  const creatingBodyData = (name, value) => {
    SetSignUpBody((prev) => {
      console.log(prev);
      return { ...prev, [name]: value };
    });
  };

  const signUpWithUserData = async () => {
    fetch("http://localhost:5000/listData/signUp", {
      method: "POST",
      body: JSON.stringify({
        name: "rusFdCwdd",
        email: "asafdssd@ham",
        password: "xvdd",
        cofirmationPassword: "xvdd",
      }),
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json())
      .then((json) => {
        // setList(json);
        console.log(json);
      });
  };

  // name, email, password, cofirmationPassword

  return (
    <div className={classes.pc_login_main}>
      <Typography
        variant="h5"
        component="h5"
        className={classes.pc_login_mainText}
        sx={{ fontWeight: "bold" }}
      >
        Sign Up
      </Typography>

      <Typography variant="caption" component="h9" sx={{ color: "#616161" }}>
        Making you financially well and get notification for stock
      </Typography>

      <div>
        <div className={classes.pc_signup_stack}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            placeholder="Name"
            variant="outlined"
            size="small"
            margin="normal"
            name="name"
            helperText={helperText}
            onChange={(e) => { creatingBodyData(e.target.name, e.target.value); }}
          />
          <br />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            placeholder="Email"
            variant="outlined"
            size="small"
            margin="dense"
            name="email"
            onChange={(e) => { creatingBodyData(e.target.name, e.target.value); }}

          />
          <br />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            placeholder="Password"
            variant="outlined"
            size="small"
            margin="normal"
            name="password"
            onChange={(e) => { creatingBodyData(e.target.name, e.target.value); }}

          />
          <br />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            placeholder="Password"
            variant="outlined"
            size="small"
            margin="normal"
            name="cofirmationPassword"
            onChange={(e) => { creatingBodyData(e.target.name, e.target.value); }}
            x
          />
          <br />
          <div className={classes.pc_signup_button}>
            <Button variant="contained" disableElevation size="small" onClick={signUpWithUserData}>
              SIgn up
            </Button>
          </div>
          <div className={classes.pc_signup_button}>
            <span className={classes.pc_signup_iconButton}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                disableElevation
                size="small"
                color="error"
              >
                Google
              </Button>
            </span>
            <span className={classes.pc_signup_iconButton}>
              <Button
                variant="outlined"
                startIcon={<FacebookIcon />}
                disableElevation
                size="small"
              >
                facebook
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
