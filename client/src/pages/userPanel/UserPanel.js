import React from "react";
import {
  Box, Grid, Stack, Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import useStyles from "./UserPanelTheme";

export default function UserPanel() {
  const classes = useStyles();

  return (
    <Box p={1} sx={{ height: "100", boxSizing: "border-box", backgroundColor: "#212121" }} className={classes.mainBox}>
      <Grid container justifyContent="center" className={classes.mainGridContainer} sx={{ border: "#ff6d00" }}>
        <Grid item xs={12} md={0.7} className={classes.mainGridItem}>
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"

            >
              <AccountCircleIcon
                sx={{
                  padding: "40px 0px",
                  color: "#fafafa",
                  "&:hover": {
                    color: "#64b5f6",
                  },
                }}
                fontSize="large"
              />
            </Stack>
            <Divider variant="middle" sx={{ background: "#bdbdbd" }} />
            <Stack
              sx={{ padding: "30px 0px" }}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <HomeOutlinedIcon
                sx={{
                  padding: "20px 0px",
                  color: "#fafafa",
                  "&:hover": {
                    color: "#64b5f6",
                  },
                }}
                fontSize="medium"
              />
              <AddAlertOutlinedIcon
                sx={{
                  padding: "20px 0px",
                  color: "#fafafa",
                  "&:hover": {
                    color: "#64b5f6",
                  },
                }}
                fontSize="medium"
              />
              <CloudDownloadOutlinedIcon
                sx={{
                  padding: "20px 0px",
                  color: "#fafafa",
                  "&:hover": {
                    color: "#64b5f6",
                  },
                }}
                fontSize="medium"
              />
              <SettingsOutlinedIcon
                sx={{
                  padding: "20px 0px",
                  color: "#fafafa",
                  "&:hover": {
                    color: "#64b5f6",
                  },
                }}
                fontSize="medium"
              />

            </Stack>

          </Box>
          <Grid />

        </Grid>
        <Grid item xs={12} md={3} sx={{ backgroundColor: "#757575" }} className={classes.mainGridItem}>
          <h1>uhdfvufhvuf</h1>

        </Grid>
        <Grid item xs={12} md={3} className={classes.mainGridItem}>
          <h1>uhhvuf</h1>

        </Grid>
        <Grid item xs={12} md={5.3} className={classes.mainGridItem}>
          <h1>uhdfvufhvuf</h1>

        </Grid>
      </Grid>
    </Box>

  );
}
