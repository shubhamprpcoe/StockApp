import React, { useEffect, useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import useStyles from "./SignUpTheme";

export default function signUp() {
  const classes = useStyles();

  const [validateName, SetValidateName] = useState("Name");
  const [validateEmail, SetValidateEmail] = useState("Email");
  const [validatePassword, SetValidatePassword] = useState("Password");
  const [validateCofirmationPassword, SetValidateCofirmationPassword] = useState("Cofirmation password");
  const [callApi, SetCallApi] = useState("false");

  const [signUpBody, SetSignUpBody] = useState({
    name: "", email: "", password: "", cofirmationPassword: "",
  });
  // creating and messaging data to sending backx`
  const creatingBodyData = (name, value) => {
    SetSignUpBody({ ...signUpBody, [name]: value });
  };

  // signUpBody is not updating latest value so need to
  // rerender this componet twice so we use use effect
  useEffect(() => {
  }, [signUpBody]);

  // validating  user inuts
  const validateUserInputs = (validateData) => {
    if (validateData.name.length === 0) {
      SetValidateName("Name is empty");
      SetCallApi(false);
    } else { SetValidateName("Name"); }
    if (!validateData.email.includes("@")) {
      SetValidateEmail("Wrong email");
      SetCallApi(false);
    } else { SetValidateEmail("Email"); }
    if (validateData.password.length < 4) {
      SetValidatePassword("Short password");
      SetCallApi(false);
    } else { SetValidatePassword("Password"); }
    if (validateData.password !== validateData.cofirmationPassword) {
      SetValidateCofirmationPassword("Not equal to password");
      SetCallApi(false);
    } else { SetValidateCofirmationPassword("Cofirmation password"); }

    if (validateData.name.length !== 0 && validateData.email.includes("@") && validateData.password.length > 3) {
      SetCallApi(true);
    }
  };

  const signUpWithUserData = async () => {
    validateUserInputs(signUpBody);
    // sending body data to api for login

    if (callApi) {
      fetch("http://localhost:5000/listData/signUp", {
        method: "POST",
        body: JSON.stringify({
          ...signUpBody,
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
      // }
      /// again validating user inputs before calling api so set false
      SetCallApi(false);
    }
  };

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

      <Typography variant="caption" component="h4" sx={{ color: "#616161" }}>
        Making you financially well and get notification for stock
      </Typography>

      <div>
        <div className={classes.pc_signup_stack}>
          <TextField
            hiddenLabel
            label={validateName}
            defaultValue=""
            id="filled-hidden-label-small"
            placeholder="Name"
            variant="outlined"
            size="small"
            margin="normal"
            name="name"
            onChange={(e) => { creatingBodyData(e.target.name, e.target.value); }}
          />
          <br />
          <TextField
            hiddenLabel
            label={validateEmail}
            defaultValue=""
            id="filled-hidden-label-small"
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
            label={validatePassword}
            defaultValue=""
            id="filled-hidden-label-small"
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
            label={validateCofirmationPassword}
            defaultValue=""
            id="filled-hidden-label-small"
            placeholder="Password"
            variant="outlined"
            size="small"
            margin="normal"
            name="cofirmationPassword"
            onChange={(e) => { creatingBodyData(e.target.name, e.target.value); }}
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
