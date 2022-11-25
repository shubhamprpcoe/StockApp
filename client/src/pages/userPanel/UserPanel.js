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
import UserStockAlertPanel from "../../components/userstockalert/UserStockAlertPanel";
import AlertStockList from "../../components/alertstocklist/AlertStockList";

export default function UserPanel() {
  const classes = useStyles();

  return (
    <Box p={1} sx={{ height: "100", boxSizing: "border-box", backgroundColor: "#212121" }} className={classes.mainBox}>
      <Grid container justifyContent="center" className={classes.mainGridContainer}>
        {/* --------------Left Icon Area-------------- */}
        <Grid item xs={12} md={0.7} className={classes.mainGridItem}>
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "27px 0px" }}
            >
              <AccountCircleIcon
                sx={{
                  padding: "0px 0px 20px 0px",
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
              direction={{
                xs: "coloum", sm: "row", md: "coloum", lg: "column", xl: "column",
              }}
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
        {/* ----------Stock Alert Panel------------- */}
        <Grid item xs={12} md={2.5} sx={{ backgroundColor: "#121212" }} className={classes.mainGridItem}>
          <UserStockAlertPanel />
        </Grid>
        {/* ----------Alert Stock List----------- */}
        <Grid item xs={12} md={3.5} className={classes.mainGridItem}>
          <AlertStockList />

        </Grid>
        <Grid item xs={12} md={5.3} className={classes.mainGridItem}>
          <h1>uhdfvufhvuf</h1>

        </Grid>
      </Grid>
    </Box>

  );
}
