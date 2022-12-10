/* eslint-disable react/self-closing-comp */
import React from "react";
// import axios from "axios";
import {
  Container, Paper, Box,
} from "@mui/material";
// import LogIn from "./login/LogIn";
import LogIn from "./LogIn";

import useStyles from "./LoginMainBodyTheme";

export default function LoginMainBody() {
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
              <LogIn />
            </div>

          </Box>
        </Paper>
      </Container>
    </div>

  // </Box>
  );
}
