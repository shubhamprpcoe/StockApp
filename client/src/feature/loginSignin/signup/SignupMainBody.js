/* eslint-disable react/self-closing-comp */
import React from "react";
// import axios from "axios";
import {
  Container, Paper, Box,
} from "@mui/material";
// import LogIn from "./login/LogIn";
import SignUp from "./SignUp";

import useStyles from "./SignupMainBodyTheme";

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.pc_login_inBox}>
      <Container className={classes.pc_login_containerWidth} sx={{ bgcolor: "#eeeeee" }}>
        <Paper className={classes.pc_login_boxWidth}>

          <Box
            className={classes.pc_login_inBox}
            style={{ background: "transparent" }}
          >
            <div className={classes.pc_login_inBox}>
              <SignUp />
            </div>

          </Box>
        </Paper>
      </Container>
    </div>

  // </Box>
  );
}
