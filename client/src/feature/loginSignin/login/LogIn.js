import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import useStyles from "./LogInTheme";

export default function signUp() {
  const classes = useStyles();

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

      <Typography variant="caption" component="h9" sx={{ color: "#616161" }}>
        Making you financially well and get notification for stock
      </Typography>

      <div>
        <div className={classes.pc_signup_stack}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            placeholder="UserName"
            variant="outlined"
            size="small"
            margin="dense"
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
          />
          <br />
          <div className={classes.pc_signup_button}>
            <Button variant="contained" disableElevation size="small">
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
