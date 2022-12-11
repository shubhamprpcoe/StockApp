import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import useStyles from "./LogInTheme";

export default function signUp() {
  const classes = useStyles();

  const [loginBody, SetLoginBody] = useState({
    email: "", password: "",
  });

  const [validateLoginEmail, SetValidateLoginEmail] = useState("Email");
  const [validateLoginPassword, SetValidateLoginPassword] = useState("Password");

  const [callLoginApi, SetCallLoginApi] = useState("");

  // creating body for sending data
  const creatingLoginBodyData = (name, value) => {
    SetLoginBody({ ...loginBody, [name]: value });
  };
  // loginBody is not updating latest value so need to
  // rerender this componet twice so we use use effect
  useEffect(() => {
  }, [loginBody]);

  const validateUserLoginInputs = (validateData) => {
    if (!validateData.email.includes("@")) {
      SetValidateLoginEmail("Wrong email");
      SetCallLoginApi(false);
    } else { SetValidateLoginEmail("Email"); }
    if (validateData.password.length < 4) {
      SetValidateLoginPassword("Short password");
      SetCallLoginApi(false);
    } else { SetValidateLoginPassword("Password"); }

    // if (validateData.email.includes("@") && validateData.password.length > 4) {
    //   SetCallLoginApi(true);
    // }
  };
  const loginWithUserData = () => {
    validateUserLoginInputs(loginBody);
    // sending body data to api for login

    if (callLoginApi || true) {
      fetch("http://localhost:5000/listData/logIn", {
        method: "POST",
        body: JSON.stringify({
          ...loginBody,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json())
        .then((json) => {
        // setList(json);
          console.log(json);
        });
    }
    /// again validating user inputs before calling api so set false
    SetCallLoginApi(false);
  };

  return (
    <div className={classes.pc_login_main}>
      <Typography
        variant="h5"
        component="h5"
        className={classes.pc_login_mainText}
        sx={{ fontWeight: "bold" }}
      >
        Create an account
      </Typography>

      <Typography variant="caption" component="h4" sx={{ color: "#616161" }}>
        Making you financially well and get notification for stock
      </Typography>

      <div>
        <div className={classes.pc_signup_stack}>
          <TextField
            hiddenLabel
            label={validateLoginEmail}
            defaultValue=""
            id="filled-hidden-label-small"
            placeholder="UserName"
            variant="outlined"
            size="small"
            margin="dense"
            name="email"
            onChange={(e) => { creatingLoginBodyData(e.target.name, e.target.value); }}
          />
          <br />
          <TextField
            hiddenLabel
            label={validateLoginPassword}
            defaultValue=""
            id="filled-hidden-label-small"
            placeholder="Password"
            variant="outlined"
            size="small"
            margin="normal"
            name="password"
            onChange={(e) => { creatingLoginBodyData(e.target.name, e.target.value); }}

          />
          <br />
          <div className={classes.pc_signup_button}>
            <Button variant="contained" disableElevation size="small" onClick={loginWithUserData}>
              Log in
            </Button>
          </div>
          <p>Log in with</p>
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
          <div className={classes.new_member}>
            <p>
              {" "}
              New Here ?
              {" "}
              <a href="url">Join Now</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
